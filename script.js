function appendValue(value) {
  const display = document.getElementById("display");
  if (display.value === "0" && value !== '.') {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value.replace(/%/g, "/100"));
  } catch {
    display.value = "Syntax Error";
  }
}
