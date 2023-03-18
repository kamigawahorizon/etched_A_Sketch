// Select the element with class 'grid' and assign it to a constant variable named 'grid'
const grid = document.querySelector('.grid');

// Select the element with class 'reset' and assign it to a constant variable named 'resetBtn'
const resetBtn = document.querySelector('.reset');

// Select the element with class 'apply' and assign it to a constant variable named 'applyGridSize'
const applyGridSize = document.querySelector('.apply');

// Select the input element with class 'grid-size' and assign it to a mutable variable named 'gridValue'
let gridValue = document.querySelector('.grid-size');

// Select the input element and assign it to a mutable variable named 'gridSize'
let gridSize = document.querySelector('input');

// Assign a fixed value of 22 pixels to a mutable variable named 'squareSize'
let squareSize = 22;

// Call the createGrid function, passing in the value of squareSize as an argument
createGrid(squareSize);
















// Add an event listener to the 'gridSize' element that updates the 'squareSize' variable and 'gridValue' text content when the input value changes
gridSize.addEventListener('input', function (e) {
    squareSize = e.target.value;
    gridValue.textContent = `${squareSize}x${squareSize}`;
});










// Add an event listener to the 'grid' element that adds a class 'active' to the target element when the mouse is over it
grid.addEventListener('mouseover', function(e) {
    if (e.target.matches('.box')) {
        e.target.classList.add('active');
    }
});










// Add an event listener to the 'applyGridSize' element that calls the 'reset' function when clicked
applyGridSize.addEventListener('click', function () {
    reset();
});











// Add an event listener to the 'resetBtn' element that calls the 'reset' function when clicked
resetBtn.addEventListener('click', reset);










// Define a function named 'reset' that removes all child elements from the 'grid' element and calls createGrid again
function reset() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    createGrid(squareSize);
}











// Define a function named 'createGrid' that creates a grid by appending div elements to the 'grid' element
function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++){
            grid.appendChild(createDiv(grid.clientWidth / gridSize));
        }
    }
}






// Define a function named 'createDiv' that creates a new div element and sets its size and class
function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    return div;
}
