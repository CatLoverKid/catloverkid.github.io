let synthwaveButton = document.getElementById("transitionButton");

synthwaveButton.addEventListener("click", function(){
    var link = document.createElement( "link" );
    link.href = "css/synthwave.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen, print";

    document.getElementsByTagName( "head" )[0].appendChild( link );
});
