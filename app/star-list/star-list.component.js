"use strict";

// Register `starList` component, along with its associated controller and template
angular.
module('starList').
component('starList', {
    templateUrl: 'star-list/star-list.template.html',
    controller: ['$http', '$scope',  function StarListController($http, $scope) {
        // note: built-in angular services are prefixed with '$'; denotes a namespace.

        $scope.errors = [];
        var self = this;
        var starData;
        self.orderProp = 'Distance';
        $scope.displayingTenStars = true;

        $scope.getTenMisc = function() {
          $http.get('stars/tenStars.json').then(
            // success callback
            function(response) {
            self.tenStarsRaw = response.data;
            self.tenStars = truncateDecimals(self.tenStarsRaw);
            self.tenStars = appendLyList(self.tenStars);
            self.tenStars = checkDone(self.tenStars);
            self.storedTenStars = JSON.stringify(self.tenStars);
            sessionStorage.setItem("storedTenStars", self.storedTenStars);
            },
            // failure callback
            function(response) {
              $scope.errors.push(response.data);
            }
          );
        }

        $scope.getTngStars = function () {
          $http.get('stars/tngStars.json').then(
            // success callback
            function(response) {
            self.tngStarsRaw = response.data;   // change self to var here and for four lines.
            self.tngStars = truncateDecimals(self.tngStarsRaw);
            self.tngStars = appendLyList(self.tngStars);
            self.tngStars = checkDone(self.tngStars);

            sessionStorage.setItem("storedTngStars", JSON.stringify(self.tngStars));
            },
            // failure callback
            function(response) {
            $scope.errors.push(response.data);
            }
          );
        }

        // init
        if (!sessionStorage.storedTenStars) {
          // stars not stored
          console.log('if trigged');
          $scope.getTenMisc();
          $scope.getTngStars();
          self.stars = self.tenStars;
          sessionStorage.activeList = 'tenStars';
          self.activeList = sessionStorage.activeList;
        } else {
          // stars already stored.
          console.log('else trigged')
          self.tenStars = JSON.parse(sessionStorage.storedTenStars);
          self.tngStars = JSON.parse(sessionStorage.storedTngStars);
          self.activeList = sessionStorage.activeList;
        }

        if (sessionStorage.activeList == "tenStars"){
          self.stars = self.tenStars;
        } else if (sessionStorage.activeList == "tngStars"){
          self.stars = self.tngStars;
        }

        //        $scope.getTngStars();
//        self.stars = JSON.parse(sessionStorage.storedTenStars);  // load ten misc initially
        // end init

        $scope.showTenMisc = function() {
          $scope.displayingTenStars = true;
          $scope.displayingTngStars = false;
          self.stars = self.tenStars;
          sessionStorage.activeList = 'tenStars';  // use for memory when scopes (views) change.
          self.activeList = 'tenStars';
        }

        $scope.showTngStars = function() {
          $scope.displayingTenStars = false;
          $scope.displayingTngStars = true;
          self.stars = self.tngStars;
          sessionStorage.activeList = 'tngStars';
          self.activeList = 'tngStar';
        }

        $scope.toggleDoneTng = function(thisStar) {
          // update scope
          thisStar.Done = !thisStar.Done;
          $scope.tngStars = self.stars;
          // update storage
          sessionStorage.setItem("storedTngStars", JSON.stringify(self.tngStars));
        }

        $scope.toggleDoneTen = function(thisStar) {
          // update scope
          thisStar.Done = !thisStar.Done;
          $scope.tenStars = self.stars;
          // update storage
          sessionStorage.setItem("storedTenStars", JSON.stringify(self.tenStars));
        }

        $scope.toggleDistanceUnit = function() {
          self.tenStars.forEach(function(star){
            star.lyUnit = !star.lyUnit;
          });
          self.tngStars.forEach(function(star){
            star.lyUnit = !star.lyUnit;
          });
        };
    }]
  });
