// default
const gameboard = document.querySelector('#gameboard');
let gridSize = 40; // defaut grid size
createGrid(gridSize);



// buttons
// changing grid size
const girdSizeButton = document.querySelector('#grid-size');
girdSizeButton.addEventListener('click', function(){
  gridSize = prompt("Enter number under 150 for grid size: ");
  // clearBox('#gameboard');
  createGrid(gridSize);
  console.log("clicked");
});

// reset grid button
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function(){
  createGrid(gridSize);
})

// black button
const blackButton = document.querySelector('#black-btn');
blackButton.addEventListener('click', function(){
  createGrid(gridSize);
})


// colorful button
const colorfulButton = document.querySelector('#colorful-btn');
colorfulButton.addEventListener('click', function(){
  createColorfulGrid(gridSize);
})


// creating the grid
// nested for loop that creates the grid
function createGrid (gridSize) {
  gameboard.replaceChildren();
  for (let i = 0; i < gridSize; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    gameboard.appendChild(row);
    for (let col = 0; col < gridSize; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
  
      square.addEventListener("click", function (e){
        console.log(e.target);
        e.target.classList.add('colored')
      })
      // add hovering effect
      square.addEventListener("mouseover", mouseOn, false);
    }
  }
}

// creates colorful grid
function createColorfulGrid (gridSize) {
  gameboard.replaceChildren();
  for (let i = 0; i < gridSize; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    gameboard.appendChild(row);
    for (let col = 0; col < gridSize; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
  
      square.addEventListener("click", function (e){
        console.log(e.target);
        e.target.classList.add('colored')
      })
      // add hovering effect
      square.addEventListener("mouseover", randomColor, false);
    }
  }
}

// function for randomizing colors
function randomColor(e) {
  var colors = ['#ff0000', '#00ff00', '#0000ff'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  e.target.style.backgroundColor = random_color;  
}

// function for hovering effect
function mouseOn(e) {
  e.target.classList.add('colored');
}


