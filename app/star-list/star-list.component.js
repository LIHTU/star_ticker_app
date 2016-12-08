"use strict";

var starData;
// Register `starList` component, along with its associated controller and template
angular.
module('starList').
component('starList', {
    templateUrl: 'star-list/star-list.template.html',
    controller: ['$http', '$scope',  function StarListController( $http, $scope) {
        // note: built-in angular services are prefixed with '$'; denotes a namespace.
        var self = this;
        self.orderProp = 'Distance';

        $http.get('stars/stars.json').then(
          // success callback
          function(response) {
            starData = response.data;
            self.stars = appendLightYears(starData); // appendLightYears in helper.js
            self.stars = truncateDecimals(starData);

            self.stars.forEach(function(star) {
                star.lyUnit = true;
            });
          }
        );

        $scope.toggleDistanceUnit = function() {
          self.stars.forEach(function(star){
            star.lyUnit = star.lyUnit == true ? false : true;
          })
        };
    }]
  });
