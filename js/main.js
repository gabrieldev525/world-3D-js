const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;

//this is the camera of the world
var camera;

/* 
 *  create a block of game
 *
 * @params 
 *      (int) id - the idenfier of block
 *      (string) name - the name of block
 *      (string) texture - the path + the name of the texture
 *      (float) size - 
 */
function Block(id, name, texture, size) {
    this.id = id;
    this.name = name;
    this.texture = texture;
    this.size = size;

    //position
    this.x = 0;
    this.y = 0;

    
    

    this.add = function(x, y) {
        this.x = x; 
        this.y = y;

        //texture(textureImage);
        square(x, y, this.size);
    }
}


// blocks creations
var block_glass = new Block(1, 'glass', 'assets/blocks/glass.png', 50);

// setup function
function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL);

    camera = createCamera();
    setCamera(camera);
}




// draw all elements
function draw() {
    background(200);
    fill(85, 178, 224);

    for(i = 0; i < 10; i++) {
        var blockSize = block_glass.size;
        block_glass.add(-CANVAS_WIDTH / 2 + blockSize + (blockSize * i), CANVAS_HEIGHT / 2 - blockSize * 2);
    }
}

