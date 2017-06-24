
// new file
var rooms;
var cleanedRooms = [];

$( document ).ready(function() {
  app.fetch(1000);
  setTimeout(function(){cleanRooms(rooms)}, 3000);
});


var cleanRooms = function(rooms){

  rooms.results.forEach(x=>{
    var cleanR = _.escape(x.roomname);
    if(cleanR !== null && cleanedRooms.indexOf(cleanR) <0){
      cleanedRooms.push(cleanR)
    }

  });
  var room =cleanedRooms.slice(1,10)
  room.forEach(y=>{
    $('#roomList').append("<option>"+ y +"</option>")
  })
  return room;
}




$( document ).on('change','#roomList',function(){
  // load the chats by filtering rooms to whatever is selected

  // room looks for the id 'roomList' and then check which option is selected
  // Then it gets only the selected options text
  var room = $('#roomList option:selected').text();
  var query = 'where={"roomname":"' + room + '"}'
  var chat = app.fetchRooms(query);
  //console.log(chat);

  // alert(room);
})




// display the chats
