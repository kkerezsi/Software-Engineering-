var loginModule = angular.module('loginModule', [])

.controller('LoginCtrl', function ($scope, $rootScope, loginFactory, $location, $route) {
    $scope.isSubmited = false;

    $scope.login = function () {
        var username = form.username.value;
        var password = form.password.value;

        if (username && password) {
            loginFactory.Login(username, password, function (response) {
                var newResponse = {
                    success : true
                }

                if (!response || response.id == null)
                    newResponse = { success: false };

                if (newResponse) {
                    loginFactory.SetCredentials(username, password, response.role);
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
