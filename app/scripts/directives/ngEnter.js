// ngyoApp.directive('ngEnter', function() {

//   function link(scope, element, attrs) {
//     element.bind("keydown keypress", function(event) {
//       if(event.keyCode === 13) {
//         var time, timeStr, sec, text;

//         // Set time string
//         time = new Date($.now());
//         if(time.getSeconds()<10){
//           sec = "0"+time.getSeconds();
//         } else {
//           sec = time.getSeconds();
//         }
//         timeStr = time.getHours()+": "+time.getMinutes()+":"+sec+" "+(time.getMonth()+1)+"/"+time.getDate()+"/"+time.getFullYear();
        
//         // Prepend chat content
//         text = angular.element('input.chatInput').val();
//         $('div.chatContent').append("<p>"+person+" says: "+text+" <span class='time'>"+timeStr+"</span></p>");
//         $('input.chatInput').val('');
        
//         // Append chat content as a node to the list
//         append(list, new Node(person, text, timeStr));
//         console.log(enumerate(list));
        
//         $("div.jumbotron").scrollTop($('div.chatContent').height());
//         $('div.chatContent p').last().animate({opacity: 1}, 500);
//       }
//     });
//   }

//   return {
//     link: link; 
//   };
// });