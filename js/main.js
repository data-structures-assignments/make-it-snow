// Falling Snow 

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGraphics(800, 600);

// Global Variables
let snowflakes = [];

for (let n = 0; n < 75; n++) {
    snowflakes.push({
        x: Math.randomDec(0, cnv.width),
        y: Math.randomDec(0, cnv.height),
        r: Math.randomDec(1, 7),
        speed: Math.randomDec(0.1, 1)
    });

}


// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Traverse through the array to draw and move snoflakes
    for (let i = 0; i < snowflakes.length; i++) {
        // Move Snowflakes
        snowflakes[i].y += snowflakes[i].speed;

        // Draw Snowflakes
        ctx.fillStyle = "white";
        ctx.fillCircle(snowflakes[i].x, snowflakes[i].y, snowflakes[i].r);

        // Teleport snowflakes that have left the canvas back to the top
        if (snowflakes[i].y > cnv.height) {
            snowflakes[i].y = Math.randomDec(-20, 0);
        }
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// Event Listeners
document.addEventListener("keydown", keydownHandler);

// Event Function
function keydownHandler(event) {
    if (event.code == "ArrowRight") {
        snowflakes.push({
            x: Math.randomDec(0, cnv.width),
            y: Math.randomDec(0, cnv.height),
            r: Math.randomDec(1, 7),
            speed: Math.randomDec(0.1, 1)
        });

    } else if (event.code == "ArrowLeft") {
        snowflakes.pop();
    }
}