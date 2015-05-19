registerModule

.factory('registerFactory', function (Restangular) {
    return {
        getOptions: function () {
            return {
                list:
                [
                   {
                       Id: "1",
                       Tip: "Student"
                   },
                   {
                       Id: "2",
                       Tip: "Teacher"
                   },
                   {
                       Id: "3",
                       Tip: "Chief of Department"
                   },
                   {
                       Id: "4",
                       Tip: "Administrator"
                   }
                ]
            }
        },

        saveUser: function (userToRegister) {
            return Restangular.one('faculty').post('student/list/', userToRegister)
        }
    }
});
