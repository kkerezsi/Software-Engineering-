studentModule

.factory('studentFactory', function (Restangular) {
    return {
        getStudents: function () {
            return Restangular.one('faculty').customGET('student/list/', {}, { 'X-CSRFToken': 'csrftoken' });
        },
        getStudent: function (idStudent) {            
            return Restangular.one('faculty').customGET('student/' + idStudent + "/", {}, { 'X-CSRFToken': 'csrftoken' });
        },
        getCourse: function (idCourse) {
            return Restangular.one('faculty').customGET('course/' + idCourse + "/", {}, { 'X-CSRFToken': 'csrftoken' });
        },
        getCourses: function (semester) {
            return Restangular.one('faculty').customGET('course/list/', {
                'semester': semester
            }, { 'X-CSRFToken': 'csrftoken' });
        },
        getYears: function () {
            return Restangular.one('faculty').customGET('year/list/', {}, { 'X-CSRFToken': 'csrftoken' });
        },
        getEnroledCourses: function(semester,student){
            return Restangular.one('faculty').customGET('enrolled/list/', {
                'semester': semester,
                'student' : student,
            }, { 'X-CSRFToken': 'csrftoken' });
        },
        enrolStudent: function (dataToSend) {
            return Restangular.one('faculty').post('enrolled/list/', dataToSend);
        }
        
    }
});