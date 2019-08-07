function cycleBackgrounds() {
    var index = 0;
    $imageEls = $('.containere .slide'); // Get the images to be cycled.
    setInterval(function () {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < $imageEls.length ? index + 1 : 0;
    // Show the next
    $imageEls.eq(index).addClass('show');
    // Hide the previous
    $imageEls.eq(index - 1).removeClass('show');
}, 8000);
};
// Document Ready.
$(function () {
cycleBackgrounds();
});
$(document).ready(function(){
    $("#plus").click(function(){
        $("#more").toggle();
    });
    $('#start-chat').click(function(){
        $('#chat').show()
        $('#chatbox').hide()
    });
    $('#newChat').click(function(){
        $('#chat').hide()
        $('.info').show()
        $('#chatbox').show()
    });
});
   