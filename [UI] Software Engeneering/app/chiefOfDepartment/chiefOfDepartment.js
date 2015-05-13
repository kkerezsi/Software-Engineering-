var chiefModule = angular.module('chiefModule', [])

.controller('ChiefCtrl', function ($scope, chiefFactory) {

    $scope.tipuriDiscipline = [];
    $scope.nume = "";
    $scope.cadru = "";

    $scope.optionalSelected = false;

    $scope.onClickOptional = function () {
        $scope.optionalSelected = !$scope.optionalSelected;
    }

    $scope.promise = chiefFactory.getDiscipline().list;

    if ($scope.promise != null) {
        $scope.teachers = $scope.promise;
        $scope.tipuriDiscipline = $scope.promise[0].TipuriDiscipline;
        $scope.nume = $scope.promise[0].Nume;
        $scope.cadru = $scope.promise[0].Cadru;
    }

    $scope.changeTeacher = function (teacher) {
        if (teacher) {
            var teachers = $scope.teachers;

            angular.forEach($scope.teachers, function (value , key) {
                if (value.Id != null && value.Id == teacher) {
                    $scope.tipuriDiscipline = value.TipuriDiscipline;
                    $scope.nume = value.Nume;
                    $scope.cadru = value.Cadru;
                }
            })
        }
    }
    
})