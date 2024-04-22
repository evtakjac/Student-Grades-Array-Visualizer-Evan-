// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables

let myArray = [];
function startIt() {
  myArray = [];
  for (i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      myArray.push(200);
    } else {
      myArray.push(400);
    }
  }
}
startIt();
// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  let barWidth = cnv.width / myArray.length;

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Bat Graph
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "grey";
  for (let i = 0; i < myArray.length; i++) {
    ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

// Key Events
document.addEventListener("keydown", keydownHandler);

// Key Functions
var newArr = [];

function keydownHandler(event) {
  console.log(event.code);
  if (event.code == "Digit1") {
    startIt();
    newArr = [];
    for (i = 0; i < myArray.length; i++) {
      if (myArray[i] == 400) {
        var temp = myArray[i];
        newArr.push(temp);
        console.log(newArr);
      } else {
        console.log(`nuh uh`);
      }
      1;
    }
    myArray = newArr;
  } else if (event.code == "Digit2") {
    startIt();
    newArr = [];
    for (i = 0; i < myArray.length; i++) {
      if (myArray[i] == 200) {
        var temp = myArray[i];
        newArr.push(temp);
        console.log(newArr);
      } else {
        console.log(`nuh uh`);
      }
    }
    myArray = newArr;
  }
}
