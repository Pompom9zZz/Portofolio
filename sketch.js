var root = [];
const NBP = 100;

window.onresize = function() {
    setup();
};

window.onload = function() {
    setup();
};


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    root = [];
    for (let i = 0; i < NBP; i++) {
        root.push(new Part());
    }
    background(0, 0, 0);
}

function draw() {
    background(0, 0, 0);
    root.forEach(element => {
        element.move();
        element.connect(root);
        element.show();
    });
}