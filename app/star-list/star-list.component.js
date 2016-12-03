'use strict';

// Register `starList` component, along with its associated controller and template
angular.
  module('starList').
  component('starList', {
    templateUrl: 'star-list/star-list.template.html',
    controller: function StarListController($http) {
      // note: built-in angular services are prefixed with '$'; denotes a namespace.
      var self = this;
      self.orderProp = 'Distance';

      $http.get('stars/stars.json').then(function(response) {
        self.stars = response.data;
      });
    }
  });
