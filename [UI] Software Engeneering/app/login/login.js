var loginModule = angular.module('loginModule', [])

.controller('LoginCtrl', function ($scope,loginFactory) {

    $scope.user = "";
    $scope.password = "";

    $scope.optionalSelected = false;

    $scope.onClickOptional = function () {
        $scope.optionalSelected = !$scope.optionalSelected;
    }

    if ($scope.promise != null) {
        $scope.options = $scope.promise;
    }

})
