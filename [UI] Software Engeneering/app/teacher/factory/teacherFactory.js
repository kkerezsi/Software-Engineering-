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
        proposeCourse: function (dataToSend) {
            return Restangular.one('faculty').post('course/optional/list/', dataToSend);
        },
        addGroup: function (dataToSend) {
            return Restangular.one('faculty').post('group/list/', dataToSend);
        },
        addStudent: function (dataToSend) {
        return Restangular.one('faculty').post('group/list/', dataToSend);
        }
    }
   
});
