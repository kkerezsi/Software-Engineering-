var loginModule = angular.module('loginModule', [])

.controller('LoginCtrl', function ($scope, $rootScope, loginFactory, $location, $route) {
    $scope.isSubmited = false;

    $scope.login = function () {
        console.log($rootScope.globals);
        var username = form.username.value;
        var password = form.password.value;

        if (username && password) {
            loginFactory.Login(username, password, function (response) {
                if (response.success) {
                    loginFactory.SetCredentials(username, password, response.roleType);
                    if ($rootScope.globals.currentUser) {
                        $scope.getCookie();
                        $location.path('/');
                    }
                }
                else {
                    $scope.failedLogin = true;
                }

            });
        }
    };
})
