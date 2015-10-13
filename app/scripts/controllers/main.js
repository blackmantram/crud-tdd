'use strict';

/**
 * @ngdoc function
 * @name crudTddApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crudTddApp
 */
angular.module('crudTddApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
