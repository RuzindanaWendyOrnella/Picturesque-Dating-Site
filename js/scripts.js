var bgImageArray = ["https://slack-redir.net/link?url=https%3A%2F%2Fst3.depositphotos.com%2F1017228%2F19282%2Fi%2F1600%2Fdepositphotos_192820048-stock-photo-portrait-of-a-happy-young.jpg", "https://www.singleblackmale.org/wp-content/uploads/2014/06/African-American-Couple-Kissing1.jpg", "https://ak6.picdn.net/shutterstock/videos/7263226/thumb/1.jpg", "https://imgix.bustle.com/uploads/image/2019/4/4/d65394f1-de0c-4018-8374-72f88edfabd5-2t4a0735.JPG?w=970&h=546&fit=crop&crop=faces&auto=format&q=70", "https://st.depositphotos.com/2931363/4105/i/450/depositphotos_41053929-stock-photo-beautiful-young-african-couple.jpg"];
base = "",
secs = 6;
bgImageArray.forEach(function(img){
    new Image().src = base + img; 
});
function backgroundSequence() {
    window.clearTimeout();
        var k = 0;
        for (var i = 0; i < bgImageArray.length; i++) {
            setTimeout(function(){
    document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
    document.documentElement.style.backgroundSize ="cover";
                if ((k + 1) === bgImageArray.length) {
                    setTimeout(function() {
                        backgroundSequence() }, (secs * 1000))
                } else { k++; }
            }, (secs * 1000) * i) 
        }
    }
    backgroundSequence();
    // Document Ready.
   function reset(){
    $("#message").val("");
}
   $(function () {
    cycleBackgrounds();
   });
   
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
$(document).ready(function(){
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
$("#lin").click(function(){
    var firstName= $('#fname').val();
    var lastName = $('#lname').val();
    var userName = $('#uname').val();
    var email = $('#email').val();
    var password = $('#pwd').val();
    var confirm = $('#r-pwd').val();
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        alert("ERROR");
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      }).success(function(json) { 
            console.log(json); 
      });
      // [END createwithemail]
    });
});

