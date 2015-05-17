var homepageModule = angular.module('homepageModule', [])

.controller('HomepageCtrl', function ($scope,$rootScope) {
    $scope.nume = "Alex";

    console.log($rootScope.globals.currentUser);

    $scope.currentUser = $rootScope.globals.currentUser;

    $scope.username = $rootScope.globals != undefined && $rootScope.globals != null && $rootScope.globals.currentUser != undefined
        ? $rootScope.globals.currentUser.username : null;
})