'use strict';

// Define the `starApp` module
angular.module('starApp', [
  // ...which depends on the `starList` module
  'ngRoute','starList', 'starDetail'
]);
