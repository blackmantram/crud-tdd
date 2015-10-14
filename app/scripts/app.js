'use strict';

/**
 * @ngdoc overview
 * @name crudTddApp
 * @description
 * # crudTddApp
 *
 * Main module of the application.
 */
angular
  .module('crudTddApp', [
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/create', {
        templateUrl: 'views/crud.html',
        controller: 'CRUDController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
