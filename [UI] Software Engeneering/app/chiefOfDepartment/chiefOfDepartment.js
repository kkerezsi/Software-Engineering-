var chiefModule = angular.module('chiefModule', [])

.controller('ChiefCtrl', function ($scope, chiefFactory) {

    $scope.courses = [];
    $scope.nume = "Nume";
    $scope.cadru = "Cadru"

    $scope.optionalSelected = false;

    $scope.onClickOptional = function () {
        $scope.optionalSelected = !$scope.optionalSelected;
    }



    chiefFactory.getProfessors().then(function (professors) {

        $scope.teachers = professors;
    });

    chiefFactory.getEnrolled().then(function (enrolled) {

        $scope.enrolled = enrolled;
    });

    chiefFactory.getCourses().then(function (courses) {

        $scope.courses = courses;
        angular.forEach($scope.courses, function (value, key) {
            var sum = 0;
            var nr = 0;

            angular.forEach($scope.enrolled, function (enr, key2) {
                if (enr.course == value.id) {
                    sum += enr.grade;
                    nr++;
                }
            });
            if(nr > 0)
                value.average = sum / nr;
            else
                value.average = 0;


        });

        console.log($scope.courses);
    });



    $scope.changeTeacher = function (teacherId) {
        if (teacherId) {
            var teachers = $scope.teachers;

            angular.forEach($scope.teachers, function (value, key) {
                if (value.id != null && value.id == teacherId) {
                    $scope.coursesByTeacher = value.courses;

                }
            })
        }
    }

})