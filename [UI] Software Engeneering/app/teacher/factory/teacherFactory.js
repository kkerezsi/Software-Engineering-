teacherModule

.factory('teacherFactory', function (Restangular) {
    return {
        getStudents: function () {
            return Restangular.one('faculty').customGET('student/list/', {});
        },
        getStudent: function (idStudent) {
            return Restangular.one('faculty').customGET('student/' + idStudent, {});
        },
        getCourse: function (idCourse) {
            return Restangular.one('faculty').customGET('course/' + idCourse, {});
        },
        getCourses: function () {
            return Restangular.one('faculty').customGET('course/list', {});
        },
        getGroups: function () {
            return Restangular.one('faculty').customGET('group/list', {});
        },
        getOptionalCourses: function () {
            return Restangular.one('faculty').customGET('course/optional/list', {});
        },
    }
   
});
