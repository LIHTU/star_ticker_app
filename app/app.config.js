'use strict';

angular.
  module('starApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/stars', {
          template: '<star-list></star-list>'
        }).
        when('/stars/:starId', {
          template: '<star-detail></star-detail>'
        }).
        otherwise('/stars');
    }
  ]);
