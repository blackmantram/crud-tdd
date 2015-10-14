'use strict';

/**
 * @ngdoc function
 * @name crudTddApp.controller:AboutCtrl
 * @description
 * # CreateController
 * Controller of the crudTddApp
 */
angular.module('crudTddApp')
  .controller('CRUDController', function ($scope) {
  	$scope.item = {};
  	$scope.items = Array();
  	$scope.create = function() {
  		$scope.items.push($scope.item);
  		$scope.item = {};
	};
	$scope.delete = function(id) {
		for(var _item in $scope.items)
		{
			if (_item.id != id)
			{
				$scope.items.splice(_item, 1);
				return;
			}
		}
	}
	$scope.update = function(id, name){
		for(var i=0; i<$scope.items.length; i++)
		{
			if ($scope.items[i].id == id)
			{
				$scope.items[i].name = name;
				return;
			}
		}
	}
  });
