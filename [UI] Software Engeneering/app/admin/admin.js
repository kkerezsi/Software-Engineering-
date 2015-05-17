var adminModule = angular.module('adminModule', [])

.controller('AdminCtrl', function ($scope, adminFactory) {

    $scope.Nume = "";
    $scope.Cadru = "";

    $scope.Studenti = [];
    $scope.Courses = [];

    $scope.promise = adminFactory.getCourses().list;


    if ($scope.promise != null) {

        //$scope.Nume = $scope.promise[0].Nume;
       // $scope.Cadru = $scope.promise[0].Cadru;

        $scope.Studenti = $scope.promise[0].Studenti;
        $scope.Courses = $scope.promise;

    }
    

    $scope.changeCours = function (cours) {
        if (cours) {
            angular.forEach($scope.Courses, function (value, key) {
                if (value.Id != null && value.Id == cours.Id) {
                    $scope.Studenti = value.Studenti;
                }
            })
        }
    }


})