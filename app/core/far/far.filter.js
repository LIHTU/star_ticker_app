angular.
  module('core').
  filter('far', function() {
    return function(input) {
      return input > 20 ? '\u2713' : '\u2718';
    };
  });
