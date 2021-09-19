// Hello
const strName = varAsObj => Object.keys(varAsObj)[0] // https://stackoverflow.com/a/42791996

function updateElements() {
    let window_innerHeight = window.innerHeight;
    let window_innerWidth = window.innerWidth;

    let e0 = document.getElementById("window.innerHeight");
    if (e0) {
        e0.textContent = strName({ window_innerHeight }) + " = " + window_innerHeight;
    }

    let e1 = document.getElementById("window.innerWidth");
    if (e1) {
        e1.textContent = strName({ window_innerWidth }) + " = " + window_innerWidth;
    }
    requestAnimationFrame(updateElements);
}

function main() {
    const lineBreak = document.createElement('br');

    let div = document.createElement("div");

    let p = document.createElement("p");
    p.id = "window.innerHeight";
    div.appendChild(p);

    p = document.createElement("p");
    p.id = "window.innerWidth";
    div.appendChild(p);

    document.body.appendChild(div);

    updateElements();
}

main();

// TODO: factorize