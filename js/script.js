
function Chat () {
    this.update = updateChat;
    this.send = sendChat;
    this.getState = getStateOfChat;
}
//gets the state of the chat
function getStateOfChat() {
	if(!instanse){
		instanse = true;
		$.ajax({
			type: "POST",
			url: "process.php",
			data: {'function': 'getState', 'file': file},
			dataType: "json",	
			success: function(data) {state = data.state;instanse = false;}
		});
	}	
}

//Updates the chat
function updateChat() {
	if(!instanse){
		instanse = true;
		$.ajax({
			type: "POST",
			url: "process.php",
			data: {'function': 'update','state': state,'file': file},
			dataType: "json",
			success: function(data) {
				if(data.text){
					for (var i = 0; i < data.text.length; i++) {
						$('#chat-area').append($(""+ data.text[i] +""));
					}	
				}
				document.getElementById('chat-area').scrollTop = document.getElementById('chat-area').scrollHeight;
				instanse = false;
				state = data.state;
			}
		});
	}
	else {
		setTimeout(updateChat, 1500);
	}
}

//send the message
function sendChat(message, nickname) { 
	updateChat();
	$.ajax({
		type: "POST",
		url: "process.php",
		data: {'function': 'send','message': message,'nickname': nickname,'file': file},
		dataType: "json",
		success: function(data){
			updateChat();
		}
    });
    
}
// function reset(){
//     $("#message").val("");
// }

$(document).ready(function(){
    
    $("#plus").click(function(){
        $("#more").toggle();

    });
    $("#chat").hide();
    $('#start-chat').click(function(){
     $('#chat').show()
     $('#chatbox').hide()
     });
     $('#newChat').click(function(){
     $('#chat').hide()
     $('.info').show()
     // $('#more').hide()
     $('#chatbox').show()
     });
     $("#submit").click(function(){
         Message=$("#message").val();
         if(Message!==""){
             $("div#talk").append("<p>" + Message + "</p>");
         }
         reset();
     });
     
});