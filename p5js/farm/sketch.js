let chickenInput;
let cowInput;
let pigInput;
let finalText;
let resultButton;
let legCount;

function setup() {
  createCanvas(600, 400);
  chickenInput = createInput('');
  chickenInput.position(10, 40);
  chickenInput.size(100);
  chickenInput.input(updateText);;

  cowInput = createInput('');
  cowInput.position(10, 90);
  cowInput.size(100);
  cowInput.input(updateText);

  pigInput = createInput('');
  pigInput.position(10, 140);
  pigInput.size(100);
  pigInput.input(updateText);

  //resultButton = createButton("Calculate");
  //resultButton.mousePressed(updateText);
  
}

function draw() {
  if (!mouseIsPressed) {
    clear(); //to rmove the previous frame drawn
    fill(0, 0, 0);
    background("rgba(0, 255, 0, 0.5)");
    textSize(16);
    text("chicken count", 10, 30);
    text("cow count", 10, 80);
    text("pig count", 10, 130);
    textSize(20);
    fill(0, 0, 100); //changes the color of all shapes (and text) until next fill command
    text(finalText, 20, 300);
  }

  if (mouseIsPressed) {
    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 30, 30)
  }
}

function updateText() {
  legCount = countLegs(chickenInput.value(), cowInput.value(), pigInput.value());
  console.log(finalText);
  if (legCount === 0) {
    finalText = `there are no legs`;
    return finalText
  }
  else if (chickenInput.value() < 0 || cowInput.value() < 0 || pigInput.value() < 0) {
    finalText = `you can't have a negative animal you silly goose!`;
    return finalText
  }
  else if (isNaN(chickenInput.value()) || isNaN(cowInput.value()) || isNaN(pigInput.value())) {
    finalText = `please enter a valid number`;
    return finalText
  }
  else {
    finalText = `there are in total ${legCount} legs`;
    return finalText
  }
  
}

function countLegs(inChickens, inCows, inPigs) {
  let outLegs = inChickens * 2 + inCows * 4 + inPigs * 4;
  return outLegs
}
e