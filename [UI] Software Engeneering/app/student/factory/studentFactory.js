﻿studentModule

.factory('studentFactory', function (Restangular) {
    return {
        getCourse: function () {
            return {
                list:
                [
                   {
                       Id: "S1",
                       Nume: "Sara Adams",
                       Cadru: "Facultatea de matematica-informatica",
                       Cursuri: [
                           {
                               Id: "3",
                               AnStudiu: "2014-2015",
                               Nume: "SDA",
                               Semestru: "4",
                               CodDisciplina: "EN123",
                               Nota: "9",
                               NumarCredite: "5",
                               Final: "True",
                               DataPromovarii: "14.05.2015",
                           }],
                       AniUniversitari: [{
                           An1: "2013-2014",
                           An2: "2014-2015",
                           An3: "2015-1016",
                       }]
                   }]
            }
        }
    }
});