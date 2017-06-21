// YOUR CODE HERE:

// GO HERE: http://parse.sfm8.hackreactor.com/chatterbox/classes/messages


// use jQuery AJAX


// API KEYS:

/*

“appId”: “72b8e073a4abde10221ce95f38ed1c63bd7f3d6b”, 
“restAPIKey”: “cf1ce23a61e2a40702c347b7dc1e0af8c28f6c7a”


*/


var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};



$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});

