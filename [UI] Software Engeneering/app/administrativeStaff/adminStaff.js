var adminStaffModule = angular.module('adminStaffModule', [])

.controller('AdminStaffCtrl', function ($scope, adminStaffFactory) {

    $scope.Nume = "";
    $scope.Cadru = "";

    $scope.Studenti = [];
    $scope.Courses = [];
    $scope.OrderBy = "Year"
    $scope.CurrCourse = 0;

    $scope.grantSelected = false;

    $scope.onClickGrant = function () {
        $scope.grantSelected = !$scope.grantSelected;
    }

    adminStaffFactory.getStudent().then(function (student) {

        $scope.Studenti = student;
    });

    adminStaffFactory.getCourses().then(function (courses) {

        $scope.Courses = courses;
    });



    $scope.changeCours = function (cours) {
        if (cours) {
            $scope.students = []
            angular.forEach(cours.enrolled_students, function (valueC, keyC) {
                var stud = "";
                angular.forEach($scope.Studenti, function (valueS, keyS) {
                    if (valueS.id == valueC)
                        stud = valueS;
                });

                var nr = 0;
                var sum = 0;
                angular.forEach(stud.grades, function (valueG, keyG) {
                    nr++;
                    sum += valueG.grade;
                });
                if (nr > 0)
                    stud.Grade = sum / nr;
                else
                    stud.Grade = 0;

                var max = 0;
                angular.forEach(stud.courses, function (valueCours, keyCours) {
                    if (valueCours.year > max)
                        max = valueCours.year;
                });

                stud.Year = max;

                $scope.students[keyC] = stud;
            });
        }
    }


    $scope.changeOrder = function (order) {
        if (order) {
            $scope.OrderBy = order;
        }
    }


})