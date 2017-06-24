// Why only 100.
// Can we query the data based on username?;
var app = {
  init: function(){

  },
  send: function(){
    // post request
    var type = "POST";
    var data = {
      username: 'Mel Brooks',
      text: 'It\'s good to be the king',
      roomname: 'lobby'
    };
    // call the function from here :)
    this.ajaxRunner(type, JSON.stringify(data));
  },

  fetch: function(num){
    var limit = 'limit='+num.toString()// from the dox
    var settings = {
    "url": "http://parse.sfm8.hackreactor.com/chatterbox/classes/messages",
    "method": "GET",
    "data": encodeURI(limit)
    }
    $.ajax(settings).done(function (response) {
      ;
     rooms = response;
    });
  },


  fetchRooms: function(query){
    var settings = {
    "url": "http://parse.sfm8.hackreactor.com/chatterbox/classes/messages",
    "method": "GET",
    "data": encodeURI(query),
    }
    $.ajax(settings).done(function (response) {
      ;
    console.log(response)
    return response;
    });
  },




  ajaxRunner: function(type, data){

    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
      type: type,
      data: data,//JSON.stringify(message) // encodeURI(query)
      contentType: 'application/json',
      success: function (data) {
      //  cleanRooms(data)
        console.log('chatterbox: Callback success',data);
        return data;
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Callback error message', data);
        return data;
      }
    });

  }
};

//app.fetch();
//app.send();












//http://docs.parseplatform.org/rest/guide/#relational-queries
// The documents use cURL but it can be converted to ajax as seen belowm
//--data-urlendcode(some query)



//var query = 'order=createdAt'; // from the docs

/*
var query = 'where={"roomname":"mike\'s room"}' // from the docs




*/
