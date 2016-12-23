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
        self.activeList = sessionStorage.activeList;
        console.log(self.activeList);

        $http.get('stars/' + $routeParams.starId + '.json').then(function(response) {
          self.star = response.data;

          // is this silly?
          self.star = appendLyDetail(self.star);
          self.star = truncateDecimalsDetail(self.star);

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
