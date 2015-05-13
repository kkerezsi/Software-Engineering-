var registerModule = angular.module('registerModule', [])

.controller('RegisterCtrl', function ($scope, $rootScope, registerFactory) {

    $scope.firstName="";
    $scope.lastName = "";
    $scope.email = "";
    $scope.password = "";
    $scope.options = [];
    $scope.option = "";

    $scope.optionalSelected = false;

    $scope.onClickOptional = function () {
        $scope.optionalSelected = !$scope.optionalSelected;
    }

    $scope.promise = registerFactory.getOptions().list;
    console.log($scope.promise);

    if ($scope.promise != null) {
        $scope.options = $scope.promise; 
    }

    $scope.changeOption = function (option) {
        $scope.option = option;
        }
})
