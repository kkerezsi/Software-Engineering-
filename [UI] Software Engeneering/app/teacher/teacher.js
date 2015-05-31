var teacherModule = angular.module('teacherModule', [])

.controller('CatalogCtrl', function ($scope, $rootScope, teacherFactory) {
    $scope.Cadru = "Matematica Informatica UBB"
    //$scope.Nume = $rootScope.globals.currentUser.name;
    //$scope.userID = $rootScope.id;

    var teacherID = 2;
    //$rootScope.globals.currentUser.userId;

    teacherFactory.getTeacher(teacherID).then(function (data) {
        $scope.teacher = data;
        $scope.studentsCourse = [];
        $scope.courses = data.courses;
        $scope.Nume = data.name;
    })
       

    $scope.changeCourse = function (courseId) {
        if (courseId) {
            //$scope.studentsCourse = [];
            angular.forEach($scope.teacher.courses, function (course, keyI) {
                if (course.id != null && course.id == courseId) {
                    $scope.enrolledStudents = course.enrolled_students;
                    //
                    angular.forEach($scope.enrolledStudents, function (studId, keyJ) {
                        if (studId != null) {
                            teacherFactory.getStudent(studId).then(function (data) {
                                $scope.student = data;
                                $scope.grades = data.grades;
                                //
                                angular.forEach($scope.grades, function (grad, keyZ) {
                                    if (grad.id != null && grad.course == courseId) {
                                        $scope.gr = grad.grade;
                                    }
                                })
                                //
                                $scope.studentsCourse.push({
                                    "id": $scope.student.id,
                                    "name": $scope.student.name,
                                    "group": $scope.student.group,
                                    "email": $scope.student.email,
                                    "grade": $scope.gr
                                });
                                //$scope.studentsCourse.push($scope.student);
                            });
                            


                        }
                    })
                   //
                }
            })
        } else {
            $scope.studentsCourse = [];
        }
    }

    $scope.onChangeCourse = function () {
        $scope.studentsCourse = [];
        if ($scope.selectedCourse)
            $scope.changeCourse($scope.selectedCourse);
        else
            $scope.changeCourse(undefined);
    }

    $scope.addGradeForStudent = function () {
        var studentId = $scope.studentId;
        var grade = $scope.grade;
        var course = $scope.selectedCourse;
       // $scope.enrolled = [];

        if (studentId.length > 0 && grade.length > 0) {
            teacherFactory.getEnrolled().then(function (dataEn) {
                $scope.enrolled = dataEn;
            
                angular.forEach($scope.enrolled, function (enrole, key) {
                    if (enrole.id != null && enrole.course == course && enrole.student == studentId) {

                        teacherFactory.addGradeForStudent({
                            'pk': enrole.id,
                            'course': course,
                            'student': studentId,
                            'grade': grade
                        });

                        return;
                    }
                })
            })
         }

        
       
    }

    
})

.controller('TeacherCtrl', function ($scope, $rootScope, teacherFactory, $filter) {

    $scope.Nume = $scope.username;
    $scope.Cadru = "Matematica Informatica UBB"
    $scope.myGroups = [];
    $scope.optCouses = []

    $scope.getOptCourses = function () {
        teacherFactory.getOptionalCourses().then(function (optCourses) {
            $scope.optCourses = optCourses;
        });
    };

    
})

.controller('CreateCatalogCtrl', function ($scope, $rootScope, teacherFactory) {
    $scope.Nume = $scope.username;
    $scope.Cadru = "Matematica Informatica UBB"

    $scope.addGroup = function () {
        var newGroup = {
            'number': $scope.number,
            'year': $scope.year
        }         
        teacherFactory.addGroup(newGroup);
    }

        
})

.controller('ProposeCourseCtrl', function ($scope, $rootScope, teacherFactory) {
    $scope.Nume = $scope.username;
    $scope.Cadru = "Matematica Informatica UBB"

    $scope.proposeCourse = function () {
        
        var name = $scope.name;
        var description = $scope.description;
        var credit = $scope.creditNr;
        var year = $scope.year;
        var semester = $scope.semester;
        //var teacher = $scope.teacher;

        if (name && name.length > 0 && description && description.length > 0 && credit && credit.length > 0 && year && year.length > 0 && semester.length > 0) {
            var response = teacherFactory.proposeCourse({
                'name': name,
                'description': description,
                'credit_number': credit,
                'year': year,
                'semester': semester,
                'teacher': 1,
                'enrolled_students': [],
                'is_optional': true,
                'approval_status': 2,
                'group': 0,
                'votes': 0,
                'student_preferences': []
            })
            if (response.success)
                $scope.successfullyProposed = true;
            else
                $scope.successfullyProposed = false;
        }

        
    }

    

})