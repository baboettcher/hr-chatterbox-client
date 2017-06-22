// Why only 100.
// Can we query the data based on username?;


var message = {
  text: '<script>alert("HELLO! YOU GOT TROLLED")</script>',
  username: 'shawndrost'
};







$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages/ObjEPqxoJJ',
  type: 'PUT',
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




//http://docs.parseplatform.org/rest/guide/#relational-queries
// The documents use cURL but it can be converted to ajax as seen belowm
//--data-urlendcode(some query)



/*//var query = 'order=createdAt'; // from the docs
var limit = 'limit=10';// from the dox
var query = 'where={"text":""}'; // from the docs
var newText = '{"text":"some text"}';


var settings = {
  "url": "http://parse.sfm8.hackreactor.com/chatterbox/classes/messages/ObjEPqxoJJ",
  "method": "PUT",
  "Content-Type": "application/json",
  "data": JSON.stringify(newText)
//  "data": encodeURI(limit)
}

$.ajax(settings).done(function (response) {
 console.log(response);
/*  response.results.forEach(function(x){
    console.log(x);
  })*/
//});*/

