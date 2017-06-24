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


$(document).ready(function(){
    $("#q").keyup(function(e){
    	if(e.keyCode === 13){
    	var value = $("#q").val()
    	console.log(value);
      createLeftSideNode(value)
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
    pushScroll();
    return node;

  }

var setResponseOnRightSideNode = function(response, node) {
    node.innerHTML = response ? response : "[empty response]";
    node.setAttribute('data-actual-response', response);
    var speaking = false;
    pushScroll();
  }

