'use strict';

angular.module('ngyoApp').controller('MainCtrl', function ($scope, chatData, $routeParams, $route) {
    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
    $scope.chatContent =  chatData.get({id: 1});

    var newChat = {'key1': 'val1'};
    newChat.id = 2;
    chatData.save(newChat).$promise.then(
        function (response) { console.log('success', response); },
        function (response) { console.log('failed', response); }
    );
});
