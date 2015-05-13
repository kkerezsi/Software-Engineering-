var studentModule = angular.module('studentModule', [])

.controller('StudentCtrl', function ($scope, $rootScope, studentFactory) {

    $scope.Cursuri = [];
    $scope.Nume = "";
    $scope.Cadru = "";
    $scope.AnStudiu = "";
    $scope.Semestru = "";
    $scope.CodDisciplina = "";
    $scope.Nota = "";
    $scope.NumarCredite = "";
    $scope.Final = "";
    $scope.DataPromovarii = "";

    //$scope.onClickOptional = function () {
    //    $scope.optionalSelected = !$scope.optionalSelected;
    //}

    $scope.promise = studentFactory.getCourse().list;
    console.log($scope.promise);

    if ($scope.promise != null) {
        $scope.student = $scope.promise;
        $scope.Cursuri = $scope.promise[0].Cursuri;
        $scope.Nume = $scope.promise[0].Nume;
        $scope.Cadru = $scope.promise[0].Cadru;
        $scope.AnStudiu = $scope.promise[0].AnStudiu;
        $scope.Semestru = $scope.promise[0].Semestru;
        $scope.CodDisciplina = $scope.promise[0].CodDisciplina;
        $scope.Nota = $scope.promise[0].Nota;
        $scope.NumarCredite = $scope.promise[0].NumarCredite;
        $scope.Final = $scope.promise[0].Final;
        $scope.DataPromovarii = $scope.promise[0].DataPromovarii;
    }

})