let synthwaveButton = document.getElementById("theyWannaSeeMyStuff");

synthwaveButton.addEventListener("click", function(){
    var link = document.createElement( "link" );
    link.href = "css/synthwave.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild( link );
});
