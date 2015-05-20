studentModule

.factory('studentFactory', function (Restangular) {
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
        getCourses: function (semester) {
            return Restangular.one('faculty').customGET('course/list', {
                'semester': semester
            });
        },
        getYears: function () {
            return Restangular.one('faculty').customGET('year/list', {});
        },
        getEnroledCourses: function(semester,student){
            return Restangular.one('faculty').customGET('enrolled/list', {
                'semester': semester,
                'student' : student,
            });
        },
        enrolStudent: function (dataToSend) {
            return Restangular.one('faculty').post('enrolled/list/', dataToSend);
        }
        
    }
});