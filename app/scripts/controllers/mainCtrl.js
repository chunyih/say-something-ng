'use strict';

ngyoApp.factory('chatData', ['$resource', function($resource) {
  var resource = $resource('../data/:id.json', {id:'@id'});
  return resource;
}]);


ngyoApp.factory('personList', [function() {
  var personList = ['John', ['John', 'Tom', 'Amy', 'Clara']];
  return personList;
}]);


ngyoApp.controller('mainCtrl', ['$scope', 'chatData', 'personList', function($scope, chatData, personList) {
  var person, prePerson;
  
  chatData.query({id:1}).$promise.then(
    function(event) {
      $scope.chatData = event;
      setTimeout(function(){
        $scope.$apply(angular.element('div.chatContent p').animate({opacity: 1}, 500))
        angular.forEach($scope.chatData, function(value, key) {value.isLoad = true});
      }, 300);
      console.log(event);
    },
    function(resp) {
      console.log('ajax failed!!');
    }
  );

  $scope.people = personList[1];
  $scope.selectedPerson = personList[0];

  $scope.selectPerson = function(index, person, event) {
    event.preventDefault();
    console.log(personList);
    personList[0] = person;
    $scope.selectedPerson = personList[0];
  };
}]);


ngyoApp.directive('chatForm', ['$compile', 'personList', 'chatData', function($compile, personList, chatData) {
  var link = function(scope, element, attrs) {
    element.on('keypress', function(e) {
      if (e.which === 13) {
        var time, timeStr, sec, text, el;
        var person =  personList[0];
      
        // Set time string
        time = new Date($.now());
        if (time.getSeconds() < 10) {sec = "0"+time.getSeconds();} 
        else {sec = time.getSeconds();}
        timeStr = time.getHours()+":"+time.getMinutes()+":"+sec+" "+(time.getMonth()+1)+"/"+time.getDate()+"/"+time.getFullYear();
        
        // Append chat content
        text = scope.chatInput;

        scope.chatData.push({"name": person, "text": text, "time": timeStr, "isLoad": false});

        // Clear chat input
        scope.chatInput = null;
        scope.$apply(angular.element('input.chatInput').val(''));

        // Scroll to bottom
        angular.element("div.jumbotron").scrollTop($('div.chatContent').height());

        scope.$apply(angular.element('div.chatContent p').last().animate({opacity: 1}, 500));
        
        scope.chatData[scope.chatData.length-1].isLoad = true;

        //chatData.save({id:1});
      }
    });
  };

  return {
    link: link,
    templateUrl: '../../views/templates/chatForm.html'
  };
}]);
