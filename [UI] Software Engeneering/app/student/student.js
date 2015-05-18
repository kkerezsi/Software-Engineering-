var studentModule = angular.module('studentModule', [])

.controller('StudentCtrl', function ($scope, $rootScope, studentFactory) {

    $scope.Nume = "Student Name";
    $scope.Cadru = "Matematica Informatica UBB"
    studentFactory.getStudents().then(function (students) {
        angular.forEach(students, function (student, keyI) {
            angular.forEach(student.courses, function (courseId, keyJ) {

                studentFactory.getCourse(courseId).then(function (courseData) {
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

.controller('ContractCtrl', function ($scope, $rootScope, studentFactory, $filter) {

    $scope.Nume = "Student Name";
    $scope.Cadru = "Matematica Informatica UBB"
    $scope.Courses = [];
    $scope.MyCourses = [];
    $scope.TotalNumberOfCredits = 0;

    $scope.getAllCourses = function () {
        studentFactory.getCourses().then(function (courses) {
            $scope.Courses = courses;
        });
    };

    $scope.AddCourse = function (courseName) {
        var myNewCourse = $filter('filter')($scope.Courses, { name: courseName });
        if (myNewCourse.length > 0) {

            angular.forEach($scope.Courses, function (course, index) {
                if (course.name === courseName) {
                    $scope.Courses.splice(index, 1)
                }
            });

            $scope.MyCourses.push(myNewCourse[0]);
            $scope.updateNumberOfCredits();
        }
    };

    $scope.RemoveCourse = function (courseName) {
        var removedCourse = $filter('filter')($scope.MyCourses, { name: courseName });

        if (removedCourse.length > 0) {
            angular.forEach($scope.MyCourses, function (course, index) {
                if (course.name === courseName) {
                    $scope.MyCourses.splice(index, 1)
                }
            });

            $scope.Courses.push(removedCourse[0]);
            $scope.updateNumberOfCredits();
        }
    };

    $scope.updateNumberOfCredits = function () {
        var sum = 0;

        angular.forEach($scope.MyCourses, function (value, index) {
            sum += value.credit_number;
        });

        $scope.TotalNumberOfCredits = sum;
    };
    
    $scope.getAllCourses();
});
