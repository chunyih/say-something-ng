'use strict';

angular
  .module('ngyoApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  })
  .factory('chatData', function ($resource) {
    var resource = $resource('../data/:id.json', {id:'@id'});
    return resource;
  });
