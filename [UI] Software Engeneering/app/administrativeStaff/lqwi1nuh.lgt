﻿<div class="container">
    <div class="jumbotron text-center">
        <h1>Petru Ciubotel</h1>
        <p class="lead">Facultatea de Matematica-Informatica</p>
        <h3>Admin</h3>
    </div>
    <hr>

    <div class="jumbotron text-center" style="height:500px">

        <div class="col-lg-4 col-md-4 col-sm-4 text-left">

            <form name="grantForm">
                <h3>Give Grant To:</h3>
                <label>
                    <input type="number" name="studentId" ng-model="newId" placeholder="Id" required>
                </label>
                <div role="alert">
                    <span class="error" ng-show="grantForm.newId.$error.required">
                        Required!
                    </span>
                </div>
                <label>
                    <input type="number" name="amount" ng-model="newAmount" placeholder="Amount" required>
                </label>
                <div role="alert">
                    <span class="error" ng-show="grantForm.newAmount.$error.required">
                        Required!
                    </span>
                </div>
                <br />
            </form>

            <div class="col-lg-12 text-center" style="padding-left:0px">
                <button class="btn btn-primary col-lg-9" ng-click="onClickGrant()">Give Grant</button>
            </div>
            <br />
            <br />
            <div class="text-left">
                <b ng-if="grantSelected" style="color:green;padding-left:0px;">
                   Grant was given!
                </b>
            </div>
        </div>


        <div class="col-lg-8 col-md-4 col-sm-4">
            Ana
            <select class="btn btn-toolbar col-lg-4" ng-options="cours.Id for cours in Courses"
                    ng-model="cours"
                    ng-change="changeCours(cours)">
                <option value="">Cours</option> 
            </select>
            
            <select class="btn btn-toolbar col-lg-4" ng-options="sortBy for sortBy in ['Year', 'Grade']"
                    ng-model="sortBy"
                    ng-change="changeOrder(sortBy)">
                <option value="">Sort By</option>
            </select>

            <br />
            <br />
            <br />
            <div style="padding-left:0px" class="col-lg-9">
                <table class="table table-hover table-bordered">
                    <thead style="background-color:grey;color:white">
                        <tr>
                            <th>Id</th>
                            <th>Group</th>
                            <th>Year</th>
                            <th>Name</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="item in Studenti | orderBy:'-'+OrderBy" style="background-color:white">
                            <td>{{item.Id}}</td>
                            <td>{{item.Group}}</td>
                            <td>{{item.Year}}</td>
                            <td>{{item.Name}}</td>
                            <td>{{item.Grade}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>