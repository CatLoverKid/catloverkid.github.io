"use strict";
(() => {

    let synthwave = {
            phoneRingAudio: new Audio('assets/phone.mp3'),
            cssLink: document.createElement( "link" ),
            init: () => {
                synthwave.cssLink.href = "css/synthwave.css";
                synthwave.cssLink.type = "text/css";
                synthwave.cssLink.rel = "stylesheet";
                synthwave.cssLink.media = "screen,print";

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
                document.getElementsByTagName( "head" )[0].appendChild( synthwave.cssLink );
                synthwave.phoneRingAudio.loop = true;
                //synthwave.phoneRingAudio.play();
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
                    $("<div/>").addClass("row").append(
                        $("<div/>").addClass("col-lg-12").append(
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
                )
                document.getElementsByTagName( "head" )[0].appendChild( defaultTheme.cssLink );
            }
        }

    window.preloadingModule = defaultTheme;
})();
