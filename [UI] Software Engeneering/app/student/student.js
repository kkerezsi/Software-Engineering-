var studentModule = angular.module('studentModule', [])

.controller('StudentCtrl', function ($scope, $rootScope, $filter, studentFactory) {

    $scope.Nume = "Student Name";
    $scope.Cadru = "Matematica Informatica UBB";

    var hardcodedStudentId = $rootScope.globals.currentUser.userId;

    studentFactory.getStudent(hardcodedStudentId).then(function (data) {
        $scope.student = data;
        $scope.list = []
        $scope.Nume = data.name

        angular.forEach($scope.student.courses, function (course, index) {
            var grade = $filter('filter')($scope.student.grades, { course: course.id })
            if (grade.length > 0)
                grade = grade[0];

            $scope.list.push({
                "line_of_study": $scope.student.line_of_study,
                "course": course.name,
                "courseId": course.id,
                "grade": grade.grade,
                "nrCredits": course.credit_number,
                "promovationDate": grade.promovation_date,
                "semester": course.semester
            })
        })

    });

    studentFactory.getYears().then(function (years) {
        var nrOfSemesters = 0;
        $scope.semesters = [];

        for (var i = 0; i < 6; i++) {
            nrOfSemesters++;
            $scope.semesters.push({ name: "Semester " + nrOfSemesters, id: nrOfSemesters });
        }

        $scope.years = years.length;
    });
})

.controller('ContractCtrl', function ($scope, $rootScope, studentFactory, $filter, $route, $location) {

    $scope.Nume = "Student Name";
    $scope.Cadru = "Matematica Informatica UBB"
    $scope.Courses = [];
    $scope.MyCourses = [];
    $scope.TotalNumberOfCredits = 0;

    var hardcodedStudentId = $rootScope.globals.currentUser.userId;

    studentFactory.getStudent(hardcodedStudentId).then(function (data) {
        $scope.student = data;
        $scope.Nume = data.name;
    });

    $scope.getAllCourses = function (semester) {
        if (!semester) {
            $scope.Courses = [];
        }
        else {
            studentFactory.getEnroledCourses(semester, $rootScope.globals.currentUser.userId).then(function (enroledCourses) {
                $scope.EnroledCourses = enroledCourses;
                studentFactory.getCourses(semester).then(function (courses) {
                    $scope.Courses = courses;

                    angular.forEach(enroledCourses, function (enroledCourse, index) {
                        var result = $filter('filter')($scope.Courses, { 'id': enroledCourse.course });

                        if (result.length > 0) {
                            result = result[0];
                            $scope.AddCourse(result.name, $scope.selectedSemester);
                            $scope.RemoveCourseDefaultStack($scope.Courses, result.name, $scope.selectedSemester);
                        }
                    });
                });
            });
        }
    };

    $scope.AddCourse = function (courseName, semester) {
        var myNewCourse = $filter('filter')($scope.Courses, { name: courseName });
        if (myNewCourse.length > 0) {

            angular.forEach($scope.Courses, function (course, index) {
                if (course.name === courseName) {
                    $scope.Courses.splice(index, 1)
                    return;
                }
            });

            $scope.MyCourses.push(myNewCourse[0]);
            $scope.updateNumberOfCredits();
        }
    };

    $scope.RemoveCourse = function (courseName, semester) {
        var removedCourse = $filter('filter')($scope.MyCourses, { name: courseName });

        if (removedCourse.length > 0) {
            angular.forEach($scope.MyCourses, function (course, index) {
                if (course.name === courseName) {
                    $scope.MyCourses.splice(index, $rootScope.globals.currentUser.userId)
                }
            });

            $scope.Courses.push(removedCourse[0]);
            $scope.updateNumberOfCredits();
        }
    };

    $scope.RemoveCourseDefaultStack = function (stack, courseName, semester) {
        var removedCourse = $filter('filter')(stack, { name: courseName });

        if (removedCourse.length > 0) {
            angular.forEach(stack, function (course, index) {
                if (course.name === courseName) {
                    stack.splice(index, $rootScope.globals.currentUser.userId)
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

    $scope.getAllCourses($scope.selectedSemester);

    $scope.onChangeSemester = function () {
        $scope.MyCourses = [];
        $scope.Courses = [];
        $scope.TotalNumberOfCredits = 0;
        if ($scope.selectedSemester)
            $scope.getAllCourses($scope.selectedSemester.id);
        else
            $scope.getAllCourses(undefined);
    }

    studentFactory.getYears().then(function (years) {
        var nrOfSemesters = 0;
        $scope.semesters = [];

        for (var i = 0; i < 6; i++) {
            nrOfSemesters++;
            $scope.semesters.push({ name: "Semester " + nrOfSemesters, id: nrOfSemesters });
        }

        $scope.years = years.length;
    });

    $scope.saveContract = function () {
        
        angular.forEach($scope.MyCourses, function (value, index) {
            var jsonPOSTRequest = {
                'course': value.id,
                'student': $scope.student.id
            };

            var response = studentFactory.enrolStudent(jsonPOSTRequest);
            if (response)
                $scope.successfullSave = true;
            else
                $scope.successfullSave = undefined;
        });

        $location.path('/');
    }
});
