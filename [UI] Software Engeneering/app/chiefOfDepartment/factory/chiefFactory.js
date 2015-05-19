﻿chiefModule

.factory('chiefFactory', function (Restangular) {
    return {
        getProfessors: function () {
            return Restangular.one('faculty').customGET('professor/list/', {});
        },
        getEnrolled: function () {
            return Restangular.one('faculty').customGET('enrolled/list/', {});
        },
        getCourses: function () {
            return Restangular.one('faculty').customGET('course/list/', {});
        },
        getOptionalCourses: function () {
            return Restangular.one('faculty').customGET('course/optional/list/', {});
        },

        approveOptionalCourse: function (optionalCourse) {
            return Restangular.one('faculty').customGET('course/optional/', optionalCourse, {})
        },

        setGroup: function(dataToSend)
        {
            return Restangular.one('faculty').post('course/optional/list/', dataToSend);
        }


    }
});
