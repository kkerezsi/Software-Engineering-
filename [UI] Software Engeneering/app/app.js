'use strict';

var roles = {
    superUser: 0,
    Chief: 1,
    Teacher: 2,
    Student: 3,
    Admin: 4,
};

var routeForUnauthorizedAccess = '/LogIn';

var app = angular.module('softwareEngeneering', [
    'restangular',
    'ngRoute',
    'ngCookies',
    'ngResource',
    'ui.bootstrap',
    'configsModule',
    'ngStorage',
    'homepageModule',
    'chiefModule',
    'teacherModule',
    'registerModule',
    'loginModule',
    'studentModule',
    'adminModule',
])

.config(function config($routeProvider, RestangularProvider, $httpProvider, configs) {
    RestangularProvider.setBaseUrl(configs.baseUrl);

    $routeProvider
        .when('/', {
            controller: 'HomepageCtrl',
            templateUrl: 'app/homepage/homepage.html'
        })
        .when('/Chief', {
            controller: 'ChiefCtrl',
            templateUrl: 'app/chiefOfDepartment/chiefOfDepartment.html',
            resolve: {
                permission: function (authorizationService, $route) {
                    return authorizationService.permissionCheck([
                        roles.superUser,
                        roles.Chief,
                    ]);
                }
            }
        })
        .when('/Teacher', {
            controller: 'TeacherCtrl',
            templateUrl: 'app/teacher/teacher.html',
            resolve: {
                permission: function (authorizationService, $route) {
                    return authorizationService.permissionCheck([
                        roles.superUser,
                        roles.Teacher
                    ]);
                }
            }
        })
         .when('/Register', {
             controller: 'RegisterCtrl',
             templateUrl: 'app/register/register.html',
             resolve: {
                 permission: function (authorizationService, $route) {
                     return authorizationService.permissionCheck([
                         roles.superUser,
                         roles.Teacher
                     ]);
                 }
             }
         })
        .when('/LogIn',
        {
            controller: 'LoginCtrl',
            templateUrl: 'app/login/login.html',
        })
        .when('/Student',
        {
            controller: 'StudentCtrl',
            templateUrl: 'app/student/student.html',
            resolve: {
                permission: function (authorizationService, $route) {
                    return authorizationService.permissionCheck([
                        roles.superUser,
                        roles.Student,
                    ]);
                }
            }
        })
        .when('/Student/Contract',
        {
            controller: 'ContractCtrl',
            templateUrl: 'app/student/contract.html',
            resolve: {
                permission: function (authorizationService, $route) {
                    return authorizationService.permissionCheck([
                        roles.superUser,
                        roles.Student,
                    ]);
                }
            }
        })

        .when('/Admin',
        {
            controller: 'AdminCtrl',
            templateUrl: 'app/administrativeStaff/admin.html',
            resolve: {
                permission: function (authorizationService, $route) {
                    return authorizationService.permissionCheck([
                        roles.superUser,
                        roles.Admin,
                    ]);
                }
            }
        })
        .otherwise({ redirectTo: '/LogIn' });
})

.controller('AppCtrl', function ($scope, $rootScope, $route, $cookieStore, loginFactory, $location) {

    $scope.getCookie = function () {
        var globals = $cookieStore.get('globals');
        if (globals != null) {
            $rootScope.globals = globals;
            $scope.username = $rootScope.globals.currentUser.username;
        }
    }

    $scope.setDefalut = function () {
        if ($rootScope.globals == null || $rootScope.globals == undefined)
            $rootScope.globals = {
                currentUser: {
                    username: undefined,
                    authdata: "",
                    role: -1
                }
            };
    };

    $scope.logout = function () {
        loginFactory.ClearCredentials();
        $scope.username = undefined;
        $route.reload();
        $location.path('/');
    }

    $scope.getCookie();
    $scope.setDefalut();

})

.factory('authorizationService', function ($resource, $q, $rootScope, $location) {
    return {
        // We would cache the permission for the session,
        //to avoid roundtrip to server
        //for subsequent requests

        permissionModel: {
            permission: {},
            isPermissionLoaded: false
        },

        permissionCheck: function (roleCollection) {

            // we will return a promise .
            var deferred = $q.defer();

            //this is just to keep a pointer to parent scope from within promise scope.
            var parentPointer = this;

            //Checking if permission object(list of roles for logged in user) 
            //is already filled from service
            if (this.permissionModel.isPermissionLoaded) {
                //Check if the current user has required role to access the route
                this.getPermission(this.permissionModel, roleCollection, deferred);
            } else {
                //if permission is not obtained yet, we will get it from  server.
                // 'api/permissionService' is the path of server web service , used for this example.

                //$resource('/api/permissionService').get().$promise.then(function (response) {
                //    //when server service responds then we will fill the permission object
                //    parentPointer.permissionModel.permission = response;

                //    //Indicator is set to true that permission object is filled and 
                //    //can be re-used for subsequent route request for the session of the user
                //    parentPointer.permissionModel.isPermissionLoaded = true;

                //    //Check if the current user has required role to access the route
                //    parentPointer.getPermission(parentPointer.permissionModel, roleCollection, deferred);
                //});

                parentPointer.permissionModel.permission = {
                    isSuperUser: $rootScope.globals != undefined ? $rootScope.globals.currentUser.role == 0 ? true : false : false,
                    isChief: $rootScope.globals != undefined ? $rootScope.globals.currentUser.role == 1 ? true : false : false,
                    isTeacher: $rootScope.globals != undefined ? $rootScope.globals.currentUser.role == 2 ? true : false : false,
                    isStudent: $rootScope.globals != undefined ? $rootScope.globals.currentUser.role == 3 ? true : false : false,
                    isAdmin: $rootScope.globals != undefined ? $rootScope.globals.currentUser.role == 4 ? true : false : false,
                };

                parentPointer.permissionModel.isPermissionLoaded = true;
                parentPointer.getPermission(parentPointer.permissionModel, roleCollection, deferred);
            }
            return deferred.promise;
        },


        //Method to check if the current user has required role to access the route
        //'permissionModel' has permission information obtained from server for current user
        //'roleCollection' is the list of roles which are authorized to access route
        //'deferred' is the object through which we shall resolve promise
        getPermission: function (permissionModel, roleCollection, deferred) {
            var ifPermissionPassed = false;

            angular.forEach(roleCollection, function (role) {
                switch (role) {
                    case roles.superUser:
                        if (permissionModel.permission.isSuperUser) {
                            ifPermissionPassed = true;
                        }
                        break;
                    case roles.Chief:
                        if (permissionModel.permission.isChief) {
                            ifPermissionPassed = true;
                        }
                        break;
                    case roles.Teacher:
                        if (permissionModel.permission.isTeacher) {
                            ifPermissionPassed = true;
                        }
                        break;
                    case roles.Student:
                        if (permissionModel.permission.isStudent) {
                            ifPermissionPassed = true;
                        }
                        break;

                    case roles.Admin:
                        if (permissionModel.permission.isAdmin) {
                            ifPermissionPassed = true;
                        }
                        break;
                    default:
                        ifPermissionPassed = false;
                }
            });
            if (!ifPermissionPassed) {
                //If user does not have required access, 
                //we will route the user to unauthorized access page
                $location.path(routeForUnauthorizedAccess);
                //As there could be some delay when location change event happens, 
                //we will keep a watch on $locationChangeSuccess event
                // and would resolve promise when this event occurs.
                $rootScope.$on('$locationChangeSuccess', function (next, current) {
                    deferred.resolve();
                });
            } else {
                deferred.resolve();
            }
        }
    };
});
