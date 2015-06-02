teacherModule

.factory('teacherFactory', function (Restangular) {
    return {
        getTeacher: function (idTeacher) {
            return Restangular.one('faculty').customGET('professor/' + idTeacher, {});
        },
        getStudent: function (idStudent) {
            return Restangular.one('faculty').customGET('student/' + idStudent, {});
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
        },
        getEnrolled: function () {
            return Restangular.one('faculty').customGET('enrolled/list/', {});
        },
        addGradeForStudent: function (data) {
            return Restangular.all('faculty/enrolled/' + data.pk + '/').customPUT(data);
        },
        addPromovationDateForStudent: function (data) {
        return Restangular.all('faculty/enrolled/' + data.pk + '/').customPUT(data);
    }

    }
   
});
