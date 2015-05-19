adminStaffModule
.factory('adminStaffFactory', function (Restangular) {
    return {
        getStudent: function () {
            return Restangular.one('faculty').customGET('student/list/', {});
        },
        getCourses: function () {
            return Restangular.one('faculty').customGET('course/list/', {});
        },

    }

})