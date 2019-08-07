var bgImageArray = ["https://slack-redir.net/link?url=https%3A%2F%2Fst3.depositphotos.com%2F1017228%2F19282%2Fi%2F1600%2Fdepositphotos_192820048-stock-photo-portrait-of-a-happy-young.jpg", "https://www.singleblackmale.org/wp-content/uploads/2014/06/African-American-Couple-Kissing1.jpg", "https://image.shutterstock.com/image-photo/love-air-beautiful-young-african-260nw-400220989.jpg", "https://imgix.bustle.com/uploads/image/2019/4/4/d65394f1-de0c-4018-8374-72f88edfabd5-2t4a0735.JPG?w=970&h=546&fit=crop&crop=faces&auto=format&q=70", "https://ocdn.eu/images/pulscms/YjE7MDA_/2d07ba45dd9110fd86dbb868aa11131d.jpg"];
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