'use strict'

var starInfo

angular.
  module('starDetail').
  component('starDetail', {
    templateUrl: 'star-detail/star-detail.template.html',
    styleUrls: 'star-detail/star-detail.style.css',
    controller: ['$http', '$routeParams', '$scope',
      function StarDetailController($http, $routeParams, $scope) {
        var self = this;
        $scope.rawDataShow = false;

        $http.get('stars/' + $routeParams.starId + '.json').then(function(response) {
          starInfo = response.data;
          var starInfoLy = appendLightYears(starInfo); // appendLightYears in helper.js
          self.star = truncateDecimals(starInfoLy);
          self.star.lyUnit = true;
        });

        $scope.toggleDistanceUnit = function() {
          self.star.lyUnit = !self.star.lyUnit;
        };

        $scope.toggleRawData = function() {
          $scope.rawDataShow = !$scope.rawDataShow;
        }

      } // end StarDetailController
    ]
  });
