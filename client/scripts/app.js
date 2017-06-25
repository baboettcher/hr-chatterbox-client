// Why only 100.
// Can we query the data based on username?;
var app = {
  init: function() {},
  send: function(text) {
    // post reques//
   //"?username=Jason"
    console.log(username);
    var type = "POST";
    var data = {
      username: username,
      text: text,
      roomname: currentRoom
    };
    // call the function from here :)
    this.ajaxRunner(type, JSON.stringify(data));
  },

  // First fetch -- get all data.
  fetch: function(num) {
    if (num === undefined) {
      num = 10;
    }
    var limit = 'limit=' + num.toString()
    $.ajax({
      url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      data: limit, //JSON.stringify(message) // encodeURI(query)
      contentType: 'application/json',
      success: function(data) {
        // Put data in rooms global
        rooms = data;
        // Add rooms to drop down menu
        cleanRooms(rooms);
        app.clearMessages()
        $('.progress').hide();
        return data; // in place for specRunner
      },
      error: function(data) {
        console.error('chatterbox: Callback error message', data);
        return data; // in place for specRunner
      }
    });
  },

  renderMessage : function(data){
     $('#chats').append("<span>Something<span>");

  },

  fetchRooms: function(query) {
    var settings = {
      "url": "http://parse.sfm8.hackreactor.com/chatterbox/classes/messages",
      "method": "GET",
      "data": encodeURI(query),
      "ontentType": "application/json",
    }
    $.ajax(settings).done(function(response) {
      $('.progress').hide();
      app.clearMessages();
      response.results.forEach(x => {
        if (x.username === username) {
          createLeftSideNode(_.escape(x.text))
        } else {
      var responseNode = createRightSideNode();
      setResponseOnRightSideNode(_.escape(x.text), responseNode);
        }
      })
      return response;
    });
  },


  clearMessages: function() {
    $('#chats').empty();
  },


  ajaxRunner: function(type, data) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
      type: type,
      data: data, //JSON.stringify(message) // encodeURI(query)
      contentType: 'application/json',
      success: function(data) {
        //  cleanRooms(data)
        console.log('chatterbox: Callback success', data);
        return data;
      },
      error: function(data) {
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