const display = document.getElementById("display");
let expression = "";

function appendToDisplay(input) {
  if (["+", "-", "*", "/"].includes(input)) {
    if (["+", "-", "*", "/"].includes(display.value.slice(-1))) {
      display.value = display.value.slice(0, -1) + input;
    } else {
      display.value += input;
    }
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "";
}

function makePercent() {
  display.value /= 100;
}

function plusMinus() {
  display.value *= -1;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
