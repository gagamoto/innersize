function main() {
    // // -- Canvas
    // let mainCanvas = document.createElement("canvas");
    // let actualHeight = window.innerHeight;
    // mainCanvas.height = actualHeight;
    // mainCanvas.width = actualHeight * 10 / 16;
    // document.body.appendChild(mainCanvas);

    // // -- Control
    // document.addEventListener("keydown", keyDownHandler, false);
    // document.addEventListener("keyup", keyUpHandler, false);
    // document.addEventListener("touchstart", touchDownHandler, false);
    // document.addEventListener("touchend", touchUpDownHandler, false);

    // // Run
    // let mainGame = new Game(mainCanvas);
    // mainGame.initialize();
    // mainGame.run();
    let paragraph = document.createElement("p");
    paragraph.textContent = "Ceci est un test, pas de panique."
    document.body.appendChild(paragraph);
}

main();

// TODO: create text
// TODO: add resolution
// TODO: update resolution on resize