// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [];
for (i = 0; i < 100; i++) {
  myArray.push(300);
}

// - When the 'r' key is pressed, reset the array so that all elements have the value of 300 again.

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
function keydownHandler(event) {
  console.log(event.code);
  if (event.code == "Space") {
    // - When the space key is pressed, add a random decimal between -5 and 5 to all the elements in the array.
    // It should look like the values are "dancing" around their starting point. They shouldn't "drift" up or down over time.
    let randDeci = 0;
    for (i = 0; i < myArray.length; i++) {
      // currentNum = i;
      randDeci = (Math.random() * 10 - 5).toFixed(2);
      if (randDeci >= 0) {
        adjustNum = myArray[i] + randDeci * 1;
      } else if (randDeci < 0) {
        adjustNum = myArray[i] - randDeci * -1;
      }
      myArray[i] = adjustNum;
      console.log(" RAND: " + randDeci + " Adjust: " + adjustNum);
    }
  } else if (event.code == "KeyR") {
    myArray = [];
    for (i = 0; i < 100; i++) {
      myArray.push(300);
    }
  }
  // if (event.code == "ArrowRight") {
  //   myArray.push(Math.random() * 600);
  // } else if (event.code == "ArrowLeft") {
  //   myArray.pop();
  // }
}
