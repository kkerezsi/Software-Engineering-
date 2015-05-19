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

.controller('TeacherCtrl', function ($scope, $rootScope, teacherFactory, $filter) {

    $scope.Nume = "Teacher Name";
    $scope.Cadru = "Matematica Informatica UBB"
    $scope.myGroups = [];
    $scope.optCouses = []
  
    
    $scope.getOptCourses = function () {
        teacherFactory.getOptionalCourses().then(function (optCourses) {
            $scope.optCourses = optCourses;
        });
    };

    $scope.ProposeCourse = function (courseName) {
        var newCourse = {
            name: $scope.name,
            description: $scope.description,
            credit_number: $scope.creditNr,
            year: $scope.year,
            semester: $scope.semester,
            teacher: $scope.teacher
        };

        $scope.optCourses.push(newCourse);
    };

    
   

  
});