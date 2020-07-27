// Graphics Library to extend HTML canvas drawng capabilities
// Require a global cnv and ctx 
// Must call initGraphics after defining global cnv and ctx

// INIT GRAPHICS - INITIALIZE CANVAS & DRAW FUNCTIONS
function initGraphics(initWidth, initHeight) {
    cnv.width = initWidth;
    cnv.height = initHeight;

    // DRAW FUNCTIONS
    ctx.line = function (x1, y1, x2, y2) {
        // Draw a line segment from (x1, y1) to (x2, y2)
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    ctx.strokeTriangle = function (x1, y1, x2, y2, x3, y3) {
        // Draw an outlined triangle with vertices (x1, y1), (x2, y2), (x3, y3)
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath()
        ctx.stroke();
    }


    ctx.fillTriangle = function (x1, y1, x2, y2, x3, y3) {
        // Draw a filled triangle with vertices (x1, y1), (x2, y2), (x3, y3)
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.fill();
    }

    ctx.strokeQuad = function (x1, y1, x2, y2, x3, y3, x4, y4) {
        // Draw an outlined quadrilateral with vertices (x1, y1), (x2, y2), (x3, y3), (x4, y4);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x4, y4);
        ctx.closePath();
        ctx.stroke();
    }

    ctx.fillQuad = function (x1, y1, x2, y2, x3, y3, x4, y4) {
        // Draw an filled quadrilateral with vertices (x1, y1), (x2, y2), (x3, y3), (x4, y4);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x4, y4);
        ctx.fill();
    }


    ctx.fillCircle = function (x, y, r) {
        // Draw a filled circle with center (x, y) and radius (r)
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    }

    ctx.strokeCircle = function (x, y, r) {
        // Draw an outlined circle with center (x, y) and radius (r)
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

// Mouse Stuff

// Global Variables
let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;

document.addEventListener("mousedown", function() {mouseIsPressed = true});
document.addEventListener("mouseup", function() {mouseIsPressed = false});
document.addEventListener("mousemove", mousemoveHandlerLib);

function mousemoveHandlerLib(event){
    // Save previous mouseX and mouseY
    pmouseX = mouseX;
    pmouseY = mouseY;

    // Update mouseX and mouseY
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;

}