  function pushScroll(){
  document.getElementById("chats").scrollTop = document.getElementById("chats").scrollHeight;
  }

  function queryInputKeyDown(event) {
    if (event.which !== ENTER_KEY_CODE) {
      return;
    }

    var value = queryInput.value;
    queryInput.value = "";

    createQueryNode(value);
  }

// Event listener for entering chat
$(document).ready(function(){
    // Gets all events on #q
    var username = "anonymousss";
     // gets value from #q

    $("#q").keyup(function(e){
      // looks for key 13 up event -- also known as return key
    	if(e.keyCode === 13){
      var text = $("#q").val();
    	console.log(text);
      app.send(username, text);
      createLeftSideNode(text)
        $("#q").val("")
    	}
    });
});

var createLeftSideNode = function(query) {
    var node = document.createElement('div');
    node.className = "clearfix left-align left card-panel blue white-text accent-1";
    node.innerHTML = query;
    $('#chats').append(node);
    pushScroll();
  }

var createRightSideNode = function() {
    var node = document.createElement('div');
    node.className = "clearfix right-align right card-panel white teal-text";
    node.innerHTML = "...";
    $('#chats').append(node);
 //   pushScroll();
    return node;

  }

var setResponseOnRightSideNode = function(response, node) {
    node.innerHTML = response ? response : "[empty response]";
    node.setAttribute('data-actual-response', response);
    var speaking = false;
//    pushScroll();
  }

