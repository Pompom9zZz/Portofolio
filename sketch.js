var root = [];
const NBP = 100;


Event.on('resize', function () {
    setup();
});

function setup(){
    createCanvas(windowWidth , windowHeight);
    for (let i = 0; i < NBP; i++) {
        root.push(new Part());
    }
}

function draw(){
    background(0, 0, 0);
    root.forEach(element => {
        element.move();
        element.connect(root);
        element.show();
    });
}