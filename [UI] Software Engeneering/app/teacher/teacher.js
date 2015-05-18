var teacherModule = angular.module('teacherModule', [])

.controller('CatalogCtrl', function ($scope, $rootScope, teacherFactory) {

    $scope.Nume = "Teacher Name";
    $scope.Cadru = "Matematica Informatica UBB"
    teacherFactory.getStudents().then(function (students) {
        angular.forEach(students, function (student, keyI) {
            angular.forEach(student.courses, function (courseId, keyJ) {

                teacherFactory.getCourse(courseId).then(function (courseData) {
                    students[keyI].courses[keyJ] = {
                        name: courseData.name,
                        id: courseData.id,
                        teacherId: courseData.teacher,
                        semester: courseData.semester,
                        year: courseData.year
                    }
                });
            });
        });

        $scope.list = students;

        console.log(students);
    });
})

.controller('TeacherCtrl', function ($scope, $rootScope, teacherFactory) {

    $scope.Nume = "Teacher Name";
    $scope.Cadru = "Matematica Informatica UBB"
    $scope.myGroups = [];
  
    /*
    $scope.getAllGroups = function () {
        teacherFactory.getGroups().then(function (groups) {
            $scope.myGroups = groups;
        });
    };*/

    /*
    $scope.AddNewGroupCatalog = function (groupName) {
        var myNewGroup = $filter('filter')($scope.myGroups, { name: groupName });
        if (myNewGroup.length > 0) {

            angular.forEach($scope.myGroups, function (group, index) {
                if (group.name === groupName) {
                    $scope.myGroups.splice(index, 1)
                }
            });

            $scope.myGroups.push(myNewGroup[0]);
        }
    };

    $scope.RemoveGroupCatalog = function (groupName) {
        var removedGroup = $filter('filter')($scope.myGroups, { name: groupName });

        if (removedGroup.length > 0) {
            angular.forEach($scope.myGroups, function (group, index) {
                if (group.name === groupName) {
                    $scope.myGroups.splice(index, 1)
                }
            });

            $scope.myGroups.pop(removedGroup[0]);
          
        }
        
    };*/
});