'use strict';

angular.module('ngyoApp').factory('chatData', function ($resource) {
  var resource = $resource('../data/:id', {id:'@id'});
  return resource;
});