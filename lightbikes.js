var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var speed = 1/16/1000;

var x = 0;
var y = 0;

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

function loop(){
    if(input.up) y -= 1;
    if(input.down) y += 1;
    if(input.left) x -= 1;
    if(input.right) x += 1;
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 5, 5);
    setTimeout(loop, speed);
}
loop();
