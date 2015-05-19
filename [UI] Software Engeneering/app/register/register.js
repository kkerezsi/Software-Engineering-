var registerModule = angular.module('registerModule', [])

.controller('RegisterCtrl', function ($scope, $rootScope, registerFactory) {

    $scope.firstName = "";
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

    if ($scope.promise != null) {
        $scope.options = $scope.promise;
    }

    $scope.changeOption = function (option) {
        $scope.option = option;
    }

    $scope.SaveUser = function () {
        var firstName = form.firstName.value;
        var lastName = form.lastName.value;
        var email = form.email.value;
        var type = form.userType.value;
        if (firstName.length > 0 && lastName.length > 0 && email > 0)
        registerFactory.saveUser({
                'name': firstName,
                'firstName': firstName,
                'lastName': lastName,
                'email': email,
                'type': type,
                'group': 1
            })
                .then(function (data) {
                    $scope.successfullyRegistred = true;
                });
    }
})
