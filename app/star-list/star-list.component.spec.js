'use strict';

describe('starList', function() {

  // Load the module that contains the `starList` component before each test
  beforeEach(module('starList'));

  // Test the controller
  describe('StarListController', function() {
    var ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('starList');
    }));

    it('should create a `stars` model with 3 stars', function() {
      expect(ctrl.stars.length).toBe(3);
    });

    it('should set a default value for the `orderProp` model', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
