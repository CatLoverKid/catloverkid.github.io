"use strict";
(() => {

    let vaporwave = {
            phoneRingAudio: new Audio('assets/phone.mp3'),
            link: document.createElement( "link" ),
            init: () => {
                vaporwave.link.href = "css/synthwave.css";
                vaporwave.link.type = "text/css";
                vaporwave.link.rel = "stylesheet";
                vaporwave.link.media = "screen,print";

                $("#masterContainer").empty().append(
                    $("<div/>").addClass("grid").append(
                        
                    )



                )
                    $("<div/>").addClass("phoneContainer").append(
                        $("<img/>").attr({
                            src: '../assets/phoneBaseTEMP.png',
                            class: 'introPhone'
                        })
                    )
                ).append(
                    $("<h1/>").append("S Y N T H W A V E")
                )
                document.getElementsByTagName( "head" )[0].appendChild( vaporwave.link );
                vaporwave.phoneRingAudio.loop = true;
                vaporwave.phoneRingAudio.play();
            }
        };

        let defaultTheme = {
            init: () => {
                $("#masterContainer").empty().append(
                    $("<div/>").addClass("blackBackground").append(
                        $("<p/>").append("Test")
                    )
                )
            }
        }

    window.preloadingModule = vaporwave;
})();
