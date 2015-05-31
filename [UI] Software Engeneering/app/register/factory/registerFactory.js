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
            switch (userToRegister.type) {
                case 1: {
                    //cheaf
                    return Restangular.one('faculty').post('chief/list/', userToRegister)
                }
                case 2: {
                    //teacer
                    return Restangular.one('faculty').post('teacher/list/', userToRegister)
                }

                case 3: {
                    return Restangular.one('faculty').post('student/list/', userToRegister)
                    //student
                }
                case 4: {
                    return Restangular.one('faculty').post('staff/list/', userToRegister)
                    //admin
                }
                default: {
                    return -1;
                }
            }
        }
    }
});
