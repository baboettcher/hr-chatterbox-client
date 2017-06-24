
// new file
var rooms;
var cleanedRooms = [];

$( document ).ready(function() {
  app.fetch(1000);
  $(".button-collapse").sideNav();
});


// builds the dropdown
var cleanRooms = function(rooms){

  rooms.results.forEach(x=>{
    var cleanR = _.escape(x.roomname);
    if(cleanR !== null && cleanedRooms.indexOf(cleanR) <0){
      cleanedRooms.push(cleanR)
    }

  });
  var room =cleanedRooms.slice(1,10)
  room.forEach(y=>{
    // adding li tags to the dropdown
    $('#dropdown1').append('<li><a class="room-name" href="#!">'+ y +'</a></li>')
  })

  return room;
}




  $( document ).on('click','.room-name',function(){
  $('.progress').show();
  var room = $(this).text();
  console.log(room)
  app.clearMessages()
  var query = 'where={"roomname":"' + room + '"}'
  var chat = app.fetchRooms(query);
  })




// display the chats
