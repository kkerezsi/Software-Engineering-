var homepageModule = angular.module('homepageModule', [])

.controller('HomepageCtrl', function ($scope,$rootScope) {
    $scope.nume = "Alex";

    $scope.currentUser = $rootScope.globals.currentUser;

    $scope.getCookie();

    $scope.username = $rootScope.globals != undefined && $rootScope.globals != null && $rootScope.globals.currentUser != undefined
        ? $rootScope.globals.currentUser.username : null;
})