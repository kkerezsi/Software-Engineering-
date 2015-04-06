chiefModule

.factory('chiefFactory', function (Restangular) {
    return {
        getDiscipline: function () {
            return {
                list:
                [
                   {
                       Id : "S1",
                       Nume: "Sara Adams",
                       Cadru: "Facultatea de matematica-informatica",
                       TipuriDiscipline: [
                           {
                               Id: "1",
                               Nume: "OOP",
                           },
                           {
                               Id: "3",
                               Nume: "SDA",
                           },
                           {
                               Id: "2",
                               Nume: "MAP",
                           }
                       ]
                   },
                   {
                       Id: "S2",
                       Nume: "Vancea Alexandru",
                       Cadru: "Facultatea de matematica-informatica",
                       TipuriDiscipline: [
                           {
                               Id: "1",
                               Nume: "ASC",
                           },
                           {
                               Id: "3",
                               Nume: "OOP",
                           },
                           {
                               Id: "2",
                               Nume: "MAP",
                           }
                       ]
                   },
                   {
                       Id: "S3",
                       Nume: "Adrian Vultur",
                       Cadru: "Facultatea de matematica",
                       TipuriDiscipline: [
                           {
                               Id: "1",
                               Nume: "SSD",
                           },
                           {
                               Id: "3",
                               Nume: "FP",
                           },
                           {
                               Id: "2",
                               Nume: "LF",
                           }
                       ]
                   }
                ]
            }
        }
    }
});