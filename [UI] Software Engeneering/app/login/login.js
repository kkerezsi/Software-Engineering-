var loginModule = angular.module('loginModule', [])

.controller('LoginCtrl', function ($scope, $rootScope, loginFactory, $location, $route) {
    $scope.isSubmited = false;

    $scope.login = function () {
        var username = form.username.value;
        var password = form.password.value;

        if (username && password) {
            loginFactory.Login(username, password, function (response) {

                if (response) {
                    var newResponse = {
                        id: response.profile_id,
                        success: true
                    }

                    if (!response || response.id == null) {
                        $scope.failedLogin = true;
                        newResponse = { success: false };
                    }

                    if (newResponse.success) {
                        var response = loginFactory.SetCredentials(username, password, newResponse.id, response.role);
                        if ($rootScope.globals.currentUser) {
                            $scope.getCookie();
                            $location.path('/');
                        }
                        else {
                            $scope.failedLogin = true;
                        }
                    }
                } else {
                    $scope.failedLogin = true;
                }
            });
        }
    };
})
