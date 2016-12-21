"use strict";

// Register `starList` component, along with its associated controller and template
angular.
module('starList').
component('starList', {
    templateUrl: 'star-list/tng-list.template.html',
    controller: ['$http', '$scope',  function TngListController($http, $scope) {
        // note: built-in angular services are prefixed with '$'; denotes a namespace.

        $scope.errors = [];
        var self = this;
        var starData;
        self.orderProp = 'Distance';
        $scope.displayingTngStars = true;

        $http.get('stars/tngStars.json').then(
          // success callback
          function(response) {
            self.starsRaw = response.data;
            self.stars = truncateDecimals(self.starsRaw);
            self.stars = appendLyList(self.stars);
            self.stars = checkDone(self.stars);
          },
          // failure callback
          function(response) {
            $scope.errors.push(response.data);
          }
        );

        $scope.showTenMisc = function() {
            $scope.displayingTenStars = true;
            $scope.displayingTngStars = false;
            $http.get('stars/tenStars.json').then(
              // success callback
              function(response) {
                self.starsRaw = response.data;
                self.stars = truncateDecimals(self.starsRaw);
                self.stars = appendLyList(self.stars);
                self.stars = checkDone(self.stars);
              },
              // failure callback
              function(response) {
                $scope.errors.push(response.data);
              }
            );
        }

        $scope.showTNG = function() {
            $scope.displayingTenStars = false;
            $scope.displayingTngStars = true;
            $http.get('stars/tngStars.json').then(
              // success callback
              function(response) {
                self.starsRaw = response.data;
                self.stars = truncateDecimals(self.starsRaw);
                self.stars = appendLyList(self.stars);
                self.stars = checkDone(self.stars);
              },
              // failure callback
              function(response) {
                $scope.errors.push(response.data);
              }
            );
        }

        $scope.toggleDone = function(thisStar) {
          thisStar.Done = !thisStar.Done;
        }

        $scope.toggleDistanceUnit = function() {
          self.stars.forEach(function(star){
            star.lyUnit = !star.lyUnit;
          })
        };
    }]
  });
