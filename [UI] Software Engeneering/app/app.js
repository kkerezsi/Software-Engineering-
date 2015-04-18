'use strict';

var app = angular.module('softwareEngeneering', [
    'restangular',
    'ngRoute',
    'ui.bootstrap',
    'configsModule',
    'homepageModule',
    'chiefModule',
    'teacherModule',
    'registerModule',
])

.config(function config($routeProvider,RestangularProvider, $httpProvider, configs) {
    RestangularProvider.setBaseUrl(configs.baseUrl);
    $routeProvider
        .when('/', {
            controller: 'HomepageCtrl',
            templateUrl: 'app/homepage/homepage.html'
        })
        .when('/Chief', {
            controller: 'ChiefCtrl',
            templateUrl: 'app/chiefOfDepartment/chiefOfDepartment.html'
        })
        .when('/Teacher', {
            controller: 'TeacherCtrl',
            templateUrl: 'app/teacher/teacher.html'
        })
         .when('/Register', {
             controller: 'RegisterCtrl',
             templateUrl: 'app/register/register.html'
         });
})


.controller('AppCtrl',function() {

})