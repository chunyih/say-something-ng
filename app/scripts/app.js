'use strict';

var ngyoApp = angular
  .module('ngyoApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html', controller: 'mainCtrl'})
      .otherwise({redirectTo: '/'});
  });









