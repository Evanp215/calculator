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
}

function add() {
  if(screenDisplay.textContent == '') {
    null;
  }
  else if (
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '-' ||
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '+' ||
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '*' ||
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '/') {
    null;
  }
  else {
    screenDisplay.textContent += '+';
  }
}

function subtract() {
  if(screenDisplay.textContent == '') {
    null;
  }
  else if (
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '-' ||
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '+' ||
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '*' ||
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '/') {
    null;
  }
  else {
    screenDisplay.textContent += '-';
  }
}

function multiply() {
  if(screenDisplay.textContent == '') {
    null;
  }
  else if (
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '-' ||
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '+' ||
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '*' ||
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '/') {
    null;
  }
  else {
    screenDisplay.textContent += '*';
  }
}

function divide() {
  if(screenDisplay.textContent == '') {
    null;
  }
  else if (
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '-' ||
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '+' ||
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '*' ||
    screenDisplay.textContent[screenDisplay.textContent.length -1] == '/') {
    null;
  }
  else {
    screenDisplay.textContent += '/';
  }
}

function equals() {
  let result = eval(screenDisplay.textContent);
  
  screenDisplay.textContent = result;
}