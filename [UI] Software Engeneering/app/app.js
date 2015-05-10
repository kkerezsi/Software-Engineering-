'use strict';

var app = angular.module('softwareEngeneering', [
    'restangular',
    'ngRoute',
    'ngCookies',
    'ui.bootstrap',
    'configsModule',
    'homepageModule',
    'chiefModule',
    'teacherModule',
    'registerModule',
    'loginModule',
    'studentModule',
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
         })
        .when('/LogIn',
        {
            controller: 'LoginCtrl',
            templateUrl: 'app/login/login.html'
        })
        .when('/Student',
        {
            controller: 'StudentCtrl',
            templateUrl: 'app/student/student.html'
        })
        .otherwise({ redirectTo: '/LogIn' });
})


.controller('AppCtrl',function() {

})