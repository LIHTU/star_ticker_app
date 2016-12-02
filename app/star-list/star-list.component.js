'use strict';

// Register `starList` component, along with its associated controller and template
angular.
  module('starList').
  component('starList', {
    templateUrl: 'star-list/star-list.template.html',
    controller: function starListController() {
      this.stars = [
        {
          "StarID": 46533,
          "Hip": 63608,
          "HD": 113226,
          "HR": 4932,
          "Gliese": "",
          "BayerFlamsteed": "47Eps Vir",
          "ProperName": "Vindemiatrix",
          "RA": 13.03632237,
          "Dec": 10.95910186,
          "Distance": 31.34796238,
          "Mag": 2.85,
          "AbsMag": 0.368953415,
          "Spectrum": "G8IIIvar",
          "ColorIndex": 0.934
        },
        {
          "StarID": 65795,
          "Hip": 91262,
          "HD": 172167,
          "HR": 7001,
          "Gliese": "Gl 721",
          "BayerFlamsteed": "3Alp Lyr",
          "ProperName": "Vega",
          "RA": 18.61560722,
          "Dec": 38.78299311,
          "Distance": 7.756146746,
          "Mag": 0.03,
          "AbsMag": 0.581769913,
          "Spectrum": "A0Vvar",
          "ColorIndex": -0.001
        },
        {
          "StarID": 2671,
          "Hip": 3829,
          "HD": "",
          "HR": "",
          "Gliese": "Gl  35",
          "BayerFlamsteed": "",
          "ProperName": "Van Maanen's Star",
          "RA": 0.81921585,
          "Dec": 5.39519773,
          "Distance": 4.406256885,
          "Mag": 12.37,
          "AbsMag": 14.14965094,
          "Spectrum": "DG",
          "ColorIndex": 0.554
        }
      ];

      this.orderProp = 'Distance';
    }
  });
