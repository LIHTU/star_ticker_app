'use strict';

describe('starList', function() {

  // Load the module that contains the `starList` component before each test
  beforeEach(module('starList'));

  // Test the controller
  describe('StarListController', function() {
    var $httpBackend, ctrl;

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('stars/stars.json')
                  .respond([
                    {
                      "StarID": 55587,
                      "Hip": 77070,
                      "HD": 140573,
                      "HR": 5854,
                      "Gliese": "Gl 596.2",
                      "BayerFlamsteed": "24Alp Ser",
                      "ProperName": "Unukalhai",
                      "RA": 15.7377766,
                      "Dec": 6.42551971,
                      "Distance": 22.45172878,
                      "Mag": 2.63,
                      "AbsMag": 0.873751063,
                      "Spectrum": "K2III",
                      "ColorIndex": 1.167
                    },
                    {
                      "StarID": 70401,
                      "Hip": 97278,
                      "HD": 186791,
                      "HR": 7525,
                      "Gliese": "",
                      "BayerFlamsteed": "50Gam Aql",
                      "ProperName": "Tarazed",
                      "RA": 19.77099171,
                      "Dec": 10.61326869,
                      "Distance": 141.2429379,
                      "Mag": 2.72,
                      "AbsMag": -3.029833712,
                      "Spectrum": "K3II",
                      "ColorIndex": 1.507
                    }
                  ]);

      ctrl = $componentController('starList');
    }));

    it('should create a `stars` property with 2 stars fetched with `$http`', function() {
      expect(ctrl.stars).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.stars).toEqual([
        {
          "StarID": 55587,
          "Hip": 77070,
          "HD": 140573,
          "HR": 5854,
          "Gliese": "Gl 596.2",
          "BayerFlamsteed": "24Alp Ser",
          "ProperName": "Unukalhai",
          "RA": 15.7377766,
          "Dec": 6.42551971,
          "Distance": 22.45172878,
          "Mag": 2.63,
          "AbsMag": 0.873751063,
          "Spectrum": "K2III",
          "ColorIndex": 1.167
        },
        {
          "StarID": 70401,
          "Hip": 97278,
          "HD": 186791,
          "HR": 7525,
          "Gliese": "",
          "BayerFlamsteed": "50Gam Aql",
          "ProperName": "Tarazed",
          "RA": 19.77099171,
          "Dec": 10.61326869,
          "Distance": 141.2429379,
          "Mag": 2.72,
          "AbsMag": -3.029833712,
          "Spectrum": "K3II",
          "ColorIndex": 1.507
        }
      ]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('Distance');
    });

  });

});
