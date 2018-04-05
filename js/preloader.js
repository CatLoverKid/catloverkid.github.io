"use strict";
(() => {

    let synthwave = {
            //phoneRingAudio: new Audio('assets/phone.mp3'),
            cssLink: document.createElement( "link" ),
            init: () => {
                synthwave.cssLink.href = "css/synthwave.css";
                synthwave.cssLink.type = "text/css";
                synthwave.cssLink.rel = "stylesheet";
                synthwave.cssLink.media = "screen,print";

                $("#masterContainer").empty().append(
                    $("<div/>").append(
                    ).append(
                        $("<h1/>").append("A D D")
                    ).append($("<br>")).append(
                        $("<h1/>").append("M O R E")
                    ).append($("<br>")).append(
                        $("<h1/>").append("D U D E S")
                    )
                ).append($("<canvas>").attr(
                    "id", "synthwaveTerrain")
                );
                let terrainCanvas = document.getElementById("synthwaveTerrain");
                let cd = terrainCanvas.getContext("2d");

                document.getElementsByTagName( "head" )[0].appendChild( synthwave.cssLink );
            }
        };

        let defaultTheme = {
            cssLink: document.createElement( "link" ),
            init: () => {
                defaultTheme.cssLink.href = "css/defaultTheme.css";
                defaultTheme.cssLink.type = "text/css";
                defaultTheme.cssLink.rel = "stylesheet";
                $("#masterContainer").empty().append(
                    $("<div/>").addClass("gridWrapper").append(
                        $("<h1/>").append(
                            "ANTHONY KEBA"
                        )
                    ).append(
                        $("<div/>").append(
                            "And his meanderings through the Universe"
                        )
                    ).append(
                        $("<div/>").addClass("gridBox BoxC").append(
                            "Hyperloop"
                        )
                    ).append(
                        $("<div/>").addClass("gridBox BoxD").append(
                            "School"
                        )
                    ).append(
                        $("<div/>").addClass("gridBox BoxE").append(
                            "Side Projects"
                        )
                    )
                    .append($("<div/>"))
                    .append($("<div/>"))
                    .append($("<div/>"))
                )
                document.getElementsByTagName( "head" )[0].appendChild( defaultTheme.cssLink );
            }
        }

    window.preloadingModule = synthwave;
})();
