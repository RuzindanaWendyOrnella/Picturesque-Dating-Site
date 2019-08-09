var bgImageArray = ["https://image.shutterstock.com/image-photo/love-air-beautiful-young-african-260nw-400220989.jpg", "https://www.singleblackmale.org/wp-content/uploads/2014/06/African-American-Couple-Kissing1.jpg", "https://ak6.picdn.net/shutterstock/videos/7263226/thumb/1.jpg", "https://imgix.bustle.com/uploads/image/2019/4/4/d65394f1-de0c-4018-8374-72f88edfabd5-2t4a0735.JPG?w=970&h=546&fit=crop&crop=faces&auto=format&q=70", "https://st.depositphotos.com/2931363/4105/i/450/depositphotos_41053929-stock-photo-beautiful-young-african-couple.jpg"];
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
