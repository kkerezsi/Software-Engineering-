var chiefModule = angular.module('chiefModule', [])

.controller('ChiefCtrl', function ($scope, chiefFactory) {

    $scope.courses = [];
    $scope.nume = "Nume";
    $scope.cadru = "Cadru"

    $scope.optionalSelected = false;

    $scope.onClickOptional = function () {
        
        if ($scope.CurrOptional.year == 2 && $scope.CurrOptional.semester == 2)
            $scope.CurrOptional.group = 1;

        if ($scope.CurrOptional.year == 3 && $scope.CurrOptional.semester == 1)
            $scope.CurrOptional.group = 3;//$scope.getGroupForOptionals(2,3);

        if ($scope.CurrOptional.year == 3 && $scope.CurrOptional.semester == 2)
            $scope.CurrOptional.group =5;
        
        console.log(data);
        var respons = chiefFactory.setGroup({
            "pk": $scope.CurrOptional.id,
            "teacher": $scope.CurrOptional.teacher,
            "name": $scope.CurrOptional.name,
            "credit_number": $scope.CurrOptional.credit_number,
            "year": $scope.CurrOptional.year,
            "semester": $scope.CurrOptional.semester,
            //"description": $scope.CurrOptional.description,
            "aproval_status": $scope.CurrOptional.aproval_status,
            "group": $scope.CurrOptional.group
            //"votes": $scope.CurrOptional.votes
        });

        if (respons)
            $scope.optionalSelected = true;
        else
            $scope.optionalSelected = false;
    }

    chiefFactory.getProfessors().then(function (professors) {

        $scope.teachers = professors;
    });

    chiefFactory.getEnrolled().then(function (enrolled) {

        $scope.enrolled = enrolled;
    });

    chiefFactory.getOptionalCourses().then(function (optionalCourses) {
        $scope.optionalCourses = optionalCourses;
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
    });

    $scope.changeOptional = function (optional)
    {
        if(optional)
            $scope.CurrOptional = optional;
    }

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