
// new file
var rooms;
var cleanedRooms = [];
var currentRoom;
var username = window.location.search.substring(10);


$( document ).ready(function() {
  app.fetch(5000);
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
  var room =cleanedRooms.sort()//slice(1,10)
  room.forEach(y=>{
    // adding li tags to the dropdown
    $('#dropdown1').append('<li><a class="room-name" href="#!">'+ y +'</a></li>')
  })

  return room;
}

var timer = "";

function StartTimerFunction(query){
  timer = setInterval(function(){ app.fetchRooms(query) }, 10000);
  return timer;
}


function myStopFunction() {
    clearInterval(timer);
}


  // click hander to set the room
  $( document ).on('click','.room-name',function(){
    myStopFunction();
    // clear the setInterval timer

    currentRoom = "";

    $('.progress').show();
    var room = $(this).text();
    // this = li that was clicked

    currentRoom = room;
    $('#room-button').text(currentRoom);
    var query = 'where={"roomname":"' + room + '"}'
    // intial call to get comments onto to the page;
    app.fetchRooms(query);
    StartTimerFunction(query);
  })



// display the chats
