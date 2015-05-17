var studentModule = angular.module('studentModule', [])

<<<<<<< HEAD
.controller('StudentCtrl', function ($scope, studentFactory) {

    console.log(1);
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
    $scope.AnUniversitar1 = "";
    $scope.AnUniversitar2 = "";
    $scope.AnUniversitar3 = "";

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
        $scope.AnUniversitar1 = $scope.promise[1].An1;
        $scope.AnUniversitar2 = $scope.promise[1].An2;
        $scope.AnUniversitar3 = $scope.promise[1].An3;
    }

})
=======
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
>>>>>>> 4ebdce486cfce2264e05f833117f138f3fad4014
