var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');

var backCanvas = document.createElement('canvas');
backCanvas.widht = canvas.width;
backCanvas.height = canvas.height;
var backCtx = backCanvas.getContext('2d');

var speed = 1/16/1000;
var x = 0;
var y = 0;

var image = new Image();
// TODO
image.src = "file:///home/kubisma1/Downloads/landscape.jpg"

// Object input
var input = {
  up: false,
  down: false,
  left: false,
  right: false
};

window.onkeydown = function(event) {

  console.log(event);
  console.log(event.keyCode);

  /*
   * UP 38,87
   * LEFT 37,65
   * RIGHT 39,68
   * DOWN 40,83
   */

  event.preventDefault();
  switch(event.keyCode) {
    // UP
    case 38:
    case 87:
      input.up = true;
      break;
    // LEFT
    case 37:
    case 65:
      input.left = true;
      break;
    // RIGHT
    case 39:
    case 68:
      input.right = true;
      break;
    // DOWN
    case 40:
    case 83:
      input.down = true;
      break;
  }
}

window.onkeyup = function(event){
  event.preventDefault();
  switch(event.keyCode) {
    // UP
    case 38:
    case 87:
      input.up = false;
      break;
    // LEFT
    case 37:
    case 65:
      input.left = false;
      break;
    // RIGHT
    case 39:
    case 68:
      input.right = false;
      break;
    // DOWN
    case 40:
    case 83:
      input.down = false;
      break;
  }
}

function loop(timestamp){
    if(input.up) y -= 1;
    if(input.down) y += 1;
    if(input.left) x -= 1;
    if(input.right) x += 1;

    backCtx.clearRect(0, 0, canvas.width, canvas.height);
    // TODO
    backCtx.drawImage(image, 0, 0, backCanvas.width, backCanvas.height);

    for (var i = 0; i < 100; i++) {
      backCtx.fillStyle = "blue";
      backCtx.fillRect(
        (i * 20) % 100,
        (i * 20) % 100,
        10,
        10
      );
    }

    backCtx.fillStyle = "red";
    backCtx.fillRect(x, y, 5, 5);

    // Swap buffers
    ctx.drawImage(backCanvas, 0, 0);

    //setTimeout(loop, speed); // One time event in miliseconds
    requestAnimationFrame(loop);
}

// Equiv to setTimeout, has a return value (an object)
//var intervalId = setInterval(loop, speed);

// Other option with frame synchronization
requestAnimationFrame(loop);

//loop();
