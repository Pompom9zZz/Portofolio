var root = [];
const NBP = 100;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    for (let i = 0; i < NBP; i++) {
        root.push(new Part());
    }
}

function draw(){
    background(0);
    root.forEach(element => {
        element.move();
        element.connect(root);
        element.show();
    });
}