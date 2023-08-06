let currentValue = '';
let nextValue = '';
// Define screenDisplay and set text-content to empty string
let screenDisplay = document.querySelector('#screen-display');
screenDisplay.textContent = '';

// add event listener to each button
let buttons = document.querySelectorAll('.calc-button');
buttons.forEach((button) => {
  button.addEventListener('click', function() {
    if(button.id === 'clear') {
      clear();
    }
    else if(button.id === 'add') {
      add();
    }
    else if(button.id === 'subtract') {
      subtract();
     }
     else if(button.id === 'multiply') {
      multiply();
     }
    else if(button.id === 'divide') {
      divide();
     }
     else if(button.id === 'equal') {
      equals();
     }
     else {
       screenDisplay.textContent += button.textContent;
     }
  });
});


function clear() {
  screenDisplay.textContent = '';
  currentValue = '';
  nextValue = '';
}

function add(current, next) {
  return current + next;
}

function subtract(current, next) {
  return current - next;
}

function multiply(current, next) {
  return current * next;
}

function divide(current, next) {
  return current / next;
}

function equals() {
  
}