"use strict";
(() => {

    let vaporwave = {
            phoneRingAudio: new Audio('assets/phone.mp3'),
            cssLink: document.createElement( "link" ),
            init: () => {
                vaporwave.cssLink.href = "css/synthwave.css";
                vaporwave.cssLink.type = "text/css";
                vaporwave.cssLink.rel = "stylesheet";
                vaporwave.cssLink.media = "screen,print";

                $("#masterContainer").empty().append(
                    $("<div/>").append(
                        $("<img/>").attr({
                            src: '../assets/phoneBaseTEMP.png',
                            class: 'introPhone'
                        })
                    ).append(
                        $("<h1/>").append("S Y N T H W A V E")
                    )
                )
                document.getElementsByTagName( "head" )[0].appendChild( vaporwave.cssLink );
                vaporwave.phoneRingAudio.loop = true;
                //vaporwave.phoneRingAudio.play();
            }
        };

        let defaultTheme = {
            cssLink: document.createElement( "link" ),
            init: () => {
                defaultTheme.cssLink.href = "css/defaultTheme.css";
                defaultTheme.cssLink.type = "text/css";
                defaultTheme.cssLink.rel = "stylesheet";
                defaultTheme.cssLink.media = "screen,print";
                $("#masterContainer").empty().append(
                    $("<div/>").addClass("blackBackground").append(
                        $("<div/>").addClass("gridWrapper").append(
                            $("<div/>").addClass("gridBox BoxA").append(
                                "Test1"
                            )
                        ).append(
                            $("<div/>").addClass("gridBox BoxB").append(
                                "Test2"
                            )
                        ).append(
                            $("<div/>").addClass("gridBox BoxC").append(
                                "Test3"
                            )
                        ).append(
                            $("<div/>").addClass("gridBox BoxD").append(
                                "Test4"
                            )
                        ).append(
                            $("<div/>").addClass("gridBox BoxE").append(
                                "Test5"
                            )
                        )
                    )
                )
                document.getElementsByTagName( "head" )[0].appendChild( defaultTheme.cssLink );
            }
        }

    window.preloadingModule = defaultTheme;
})();
