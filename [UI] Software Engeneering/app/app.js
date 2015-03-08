'use strict';

var app = angular.module('softwareEngeneering', [
    'restangular',
    'ngRoute',
    'ui.bootstrap',
    'configsModule',
    'homepageModule',
])

.config(function config($routeProvider,RestangularProvider, $httpProvider, configs) {
    RestangularProvider.setBaseUrl(configs.baseUrl);
    $routeProvider
        .when('/', {
            controller: 'HomepageCtrl',
            templateUrl: 'app/homepage/homepage.html'
        });
})


.controller('AppCtrl',function() {

})