
// new file
var rooms;
var cleanRooms;

$( document ).ready(function() {
  app.fetch(5000);
  setTimeout(function(){console.log(cleanRooms(rooms))}, 2000);









});


var cleanRooms = function(rooms){

  _.each(rooms, function(element){
    element.username = _.escape(element.username);
    element.roomname = _.escape(element.roomname);
    element.text = _.escape(element.text);
  });


  var roomList = _.unique(_.pluck(rooms.results, 'roomname'));

  console.log(roomList.length);

  return roomList;
}







/*
$("form").submit(function(){
    alert("Submitted");
});
*/
