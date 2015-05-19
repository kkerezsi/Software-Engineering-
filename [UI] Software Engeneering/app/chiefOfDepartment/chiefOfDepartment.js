var chiefModule = angular.module('chiefModule', [])

.controller('ChiefCtrl', function ($scope, chiefFactory) {

    $scope.courses = [];
    $scope.name = "";

    $scope.optionalSelected = false;

    $scope.onClickOptional = function () {
        $scope.optionalSelected = !$scope.optionalSelected;
    }

    $scope.promise = chiefFactory.getProfessors().list;

    if ($scope.promise != null) {
        $scope.teachers = $scope.promise;
        $scope.courses = $scope.promise[0].courses;
        $scope.name = $scope.promise[0].name;
    }

    $scope.changeTeacher = function (teacher) {
        if (teacher) {
            var teachers = $scope.teachers;

            angular.forEach($scope.teachers, function (value , key) {
                if (value.Id != null && value.Id == teacher) {
                    $scope.courses = value.courses;
                    $scope.name = value.name;
      
                }
            })
        }
    }
    
})