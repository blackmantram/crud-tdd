'use strict';

/**
 * @ngdoc function
 * @name crudTddApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the crudTddApp
 */
angular.module('crudTddApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
