let bw = 50, bh = 50;

let camera;

function setup() {
    createCanvas(600, 400, WEBGL);

    camera = createCamera();
    
}

x = 0;
y = 0;
z = 0;

function draw() {
    background(0);
    fill(255);


    rotateX(radians(45));

    
    for(x = 0; x < 10; x++) {
        //reset the z
        translate(0, 0, -bw * 10);
        
        
        for(z = 0; z < 10; z++) {
            box(bw, bh);

            //translate the z
            translate(0, 0, bw);
        }

        //translate the x
        translate(bw, 0, 0);
    }
}

function keyPressed() {
    switch(keyCode) {
        case LEFT_ARROW:
            camera.pan(0.1);
            break;
        case RIGHT_ARROW:
            camera.pan(-0.1);
            break;

        case UP_ARROW:
            camera.tilt(-0.1);
            break;
        case DOWN_ARROW:
            camera.tilt(0.1);
            break;
    }
}