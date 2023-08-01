const gameboard = document.querySelector('#gameboard');



// nested for loop that creates the grid
for (let i = 0; i < 16; i++){
  const row = document.createElement('div');
  row.classList.add('row');
  gameboard.appendChild(row);
  for (let col = 0; col < 16; col++) {
    const square = document.createElement('div');
    square.classList.add('square');
    row.appendChild(square);
  }
}