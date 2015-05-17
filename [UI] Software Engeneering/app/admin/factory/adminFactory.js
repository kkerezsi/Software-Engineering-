adminModule
.factory('adminFactory', function (Restangular) {
    return {
        getCourses: function () {
            return {
                list:
                [
                   {
                       Id: "AOP",
                       Studenti: [
                           {
                               Id: "1",
                               Group: "212",
                               Year: "2",
                               Name: "Petru",
                               Grade: "8.75",
                           },
                           {
                               Id: "2",
                               Group: "911",
                               Year: "2",
                               Name: "Marcel",
                               Grade: "9.75",
                           },
                           {
                               Id: "3",
                               Group: "915",
                               Year: "2",
                               Name: "Andrea",
                               Grade: "10",
                           }
                       ]
                   },

                    {
                    Id: "OS",
                    Studenti: [
                        {
                            Id: "4",
                            Group: "225",
                            Year: "2",
                            Name: "Raluca",
                            Grade: "7.75",
                        },
                        {
                            Id: "5",
                            Group: "923",
                            Year: "2",
                            Name: "Victor",
                            Grade: "10",
                        },
                        {
                            Id: "6",
                            Group: "916",
                            Year: "2",
                            Name: "Pavel",
                            Grade: "10",
                        }
                    ]
                }
                ]
            }
        }
    }

})