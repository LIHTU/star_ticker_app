"use strict";

var starData;
// Register `starList` component, along with its associated controller and template
angular.
module('starList').
component('starList', {
    templateUrl: 'star-list/star-list.template.html',
    controller: ['$http', '$scope',  function StarListController($http, $scope) {
        // note: built-in angular services are prefixed with '$'; denotes a namespace.

        $scope.errors = [];
        var self = this;
        self.orderProp = 'Distance';

        $http.get('stars/stars.json').then(
          // success callback
          function(response) {
            starData = response.data;
            var starsLy = appendLightYears(starData); // appendLightYears in helper.js
            starsLy.forEach(function(star) {
                star.lyUnit = true;
            });
            self.stars = starsLy;
          },
          // failure callback
          function(response) {
            $scope.errors.push(response.data);
          }
        );

        $scope.toggleDistanceUnit = function() {
          self.stars.forEach(function(star){
            star.lyUnit = !star.lyUnit;
          })
        };
    }]
  });
