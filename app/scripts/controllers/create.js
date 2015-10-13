'use strict';

/**
 * @ngdoc function
 * @name crudTddApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the crudTddApp
 */
angular.module('crudTddApp')
  .controller('CreateController', function ($scope) {
  	$scope.items = Array();
  	$scope.create = function(id, name) {
  		if (id == undefined)
	  		id = 0;
		if (name == undefined)
	  		name = '';
		$scope.items.push({id:id, name:name});
	};
  });
