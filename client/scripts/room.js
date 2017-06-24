
// new file
var rooms;
var cleanRooms;

$( document ).ready(function() {
  app.fetch(1000);
  setTimeout(function(){console.log(cleanRooms(rooms))}, 1000);
});


var cleanRooms = function(rooms){

  _.each(rooms, function(element){
    element.username = _.escape(element.username);
    element.roomname = _.escape(element.roomname);
    element.text = _.escape(element.text);
  });

  return rooms;
}


// test
