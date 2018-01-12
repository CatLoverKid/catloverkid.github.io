let synthwaveButton = document.getElementById("transitionButton");

synthwaveButton.addEventListener("click", function(){
    var link = document.createElement( "link" );
    link.href = "css/synthwave.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    //var audio = new Audio('songs/DeepCover.mp3');
    //audio.play();

    document.getElementsByTagName( "head" )[0].appendChild( link );
});
