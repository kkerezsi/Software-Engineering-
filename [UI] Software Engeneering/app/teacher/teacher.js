var teacherModule = angular.module('teacherModule', [])

.controller('TeacherCtrl', function ($scope, teacherFactory) {

    $scope.studenti = [];
    $scope.nume = "";
    $scope.cadru = "";

    $scope.optionalSelected = false;
    $scope.catalogSelected = true;

    $scope.onClickOptional = function () {
        $scope.optionalSelected = !$scope.optionalSelected;
    }
    $scope.onClickCatalog = function () {
        $scope.catalogSelected = !$scope.optionalSelected;
    }

    $scope.promise = teacherFactory.getGroups().list;
    console.log($scope.promise);

    if ($scope.promise != null) {
        $scope.groups = $scope.promise; //teachers in loc de groups
        $scope.studenti = $scope.promise[0].Studenti;
        $scope.nume = $scope.promise[0].Nume;
        $scope.cadru = $scope.promise[0].Cadru;
    }

    $scope.changeGroup = function (group) {
        if (group) {
            var groups = $scope.groups;

            angular.forEach($scope.groups, function (value, key) {
                if (value.Id != null && value.Id == group) {
                    $scope.studenti = value.Studenti;
                    $scope.nume = value.Nume;
                    $scope.cadru = value.Cadru;
                }
            })
        }
    }

})