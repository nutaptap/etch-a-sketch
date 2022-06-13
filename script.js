const grid = document.getElementById("grid");
const row = document.getElementsByClassName("row");
const cell = document.getElementsByClassName("cell");
const bigButton = document.getElementById("big-button");
const mediumButton = document.getElementById("medium-button");
const smallButton = document.getElementById("small-button");
const drawButton = document.getElementById("draw");
const eraseButton = document.getElementById("erase");
const resetButton = document.getElementById("reset");

let size;
let mode;
let color;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

/* Create new rows */

function makeRows() {
  for (let i = 0; i < size; i++) {
    const newRow = document.createElement("div");
    newRow.className = "row";
    grid.appendChild(newRow);
  }
}

/* Populate the rows with cells */

function makeCells() {
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      const newCell = document.createElement("div");
      newCell.className = "cell";
      newCell.addEventListener("mouseover", changeColor);
      newCell.addEventListener("mousedown", changeColor);
      document.getElementsByClassName("row")[i].appendChild(newCell);
    }
  }
}

/* Make the cells change color */

function randomColor() {
  color = Math.floor(Math.random() * 7);
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (mode === "draw") {
    randomColor();
    if (color === 0) {
      e.target.style.backgroundColor = "#adb7e0";
    } else if (color === 1) {
      e.target.style.backgroundColor = "#eeaeca";
    } else if (color === 2) {
      e.target.style.backgroundColor = "#e7afcc";
    } else if (color === 3) {
      e.target.style.backgroundColor = "#dfb0cf";
    } else if (color === 4) {
      e.target.style.backgroundColor = "#d4b2d2";
    } else if (color === 5) {
      e.target.style.backgroundColor = "#c9b3d6";
    } else if (color === 6) {
      e.target.style.backgroundColor = "#beb5da";
    } else if (color === 7) {
      e.target.style.backgroundColor = "#b7b6dd";
    }
  } else if (mode === "erase") {
    e.target.style.backgroundColor = "white";
  }
}

/* Buttons */

bigButton.onclick = function () {
  grid.innerHTML = "";
  size = 64;
  makeRows();
  makeCells();
};

mediumButton.onclick = function () {
  grid.innerHTML = "";
  size = 32;
  makeRows();
  makeCells();
};
smallButton.onclick = function () {
  grid.innerHTML = "";
  size = 16;
  makeRows();
  makeCells();
};
drawButton.onclick = function () {
  mode = "draw";
};
eraseButton.onclick = function () {
  mode = "erase";
};
resetButton.onclick = function () {
  grid.innerHTML = "";
  makeRows();
  makeCells();
};

/* On load */

window.onload = function () {
  size = 16;
  mode = "draw";
  makeRows();
  makeCells();
};
