teacherModule

.factory('teacherFactory', function (Restangular) {
    return {
        getGroups: function () {
            return {
                list:
                [
                   {
                       Id: "G1",
                       Nume: "921",
                       Cadru: "MAP",
                       Studenti: [ //TipuriDiscipline
                           {
                               Id: "1",
                               Nume: "Ramona",
                           },
                           {
                               Id: "3",
                               Nume: "Alex",
                           },
                           {
                               Id: "2",
                               Nume: "Mihaela",
                           }
                       ]
                   },
                   {
                       Id: "G2",
                       Nume: "922",
                       Cadru: "FP",
                       Studenti: [
                           {
                               Id: "1",
                               Nume: "Tudor",
                           },
                           {
                               Id: "3",
                               Nume: "Denis",
                           },
                           {
                               Id: "2",
                               Nume: "Dragos",
                           }
                       ]
                   },
                   {
                       Id: "G3",
                       Nume: "923",
                       Cadru: "AOP",
                       Studenti: [
                           {
                               Id: "1",
                               Nume: "Horia",
                           },
                           {
                               Id: "3",
                               Nume: "Mihaela",
                           },
                           {
                               Id: "2",
                               Nume: "Ana",
                           }
                       ]
                   }
                ]
            }
        }
    }
});
