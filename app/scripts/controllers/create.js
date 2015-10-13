'use strict';

/**
 * @ngdoc function
 * @name crudTddApp.controller:AboutCtrl
 * @description
 * # CreateController
 * Controller of the crudTddApp
 */
angular.module('crudTddApp')
  .controller('CreateController', function ($scope) {
  	$scope.item = {};
  	$scope.items = Array();
  	$scope.create = function() {
  		$scope.items.push($scope.item);
  		$scope.item = {};
	};
  });
