const grid = document.getElementById("grid");
const row = document.getElementsByClassName("row");
const cell = document.getElementsByClassName("cell");
let size = 16;

/* Create new rows */

function makeRows() {
  for (let i = 0; i < size; i++) {
    const newRow = document.createElement("div");
    newRow.className = "row";
    grid.appendChild(newRow);
    console.log("new row");
  }
}

/* Populate the rows with cells */

function makeCells() {
  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      const newCell = document.createElement("div");
      newCell.className = "cell";
      document.getElementsByClassName("row")[i].appendChild(newCell);
      console.log("new cell");
    }
  }
}

/* --- */

makeRows();
makeCells();

function changeColor(target) {
  target.style.backgroundColor = "black";
}

grid.addEventListener("mouseover", function (e) {
  target = e.target;

  if (target.matches("div.cell")) {
    changeColor(target);
  }
});
