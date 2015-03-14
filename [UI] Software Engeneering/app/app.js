'use strict';

var app = angular.module('softwareEngeneering', [
    'restangular',
    'ngRoute',
    'ui.bootstrap',
    'configsModule',
    'homepageModule',
    'ramonaPageModule',
])

.config(function config($routeProvider,RestangularProvider, $httpProvider, configs) {
    RestangularProvider.setBaseUrl(configs.baseUrl);
    $routeProvider
        .when('/', {
            controller: 'HomepageCtrl',
            templateUrl: 'app/homepage/homepage.html'
        })
        .when('/Ramona', {
            controller: 'RamonaPageCtrl',
            templateUrl: 'app/ramonaPage/ramonaPage.html'
        });
})


.controller('AppCtrl',function() {

})