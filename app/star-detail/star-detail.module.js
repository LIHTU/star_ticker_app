"use strict"

angular.module('starDetail', [
  'ngRoute'  // proviedes $routeParams object; must include here to maintain modularity; it's in app.module as well.
]);

// always be explicit about the dependencies of a sub-module.  it incurs no extra cost - still loaded only once!
