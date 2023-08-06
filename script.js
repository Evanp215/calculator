document.addEventListener("DOMContentLoaded", function() {
  let currentDisplay = [];
  let screenDisplay = document.querySelector('#screen-display');
  screenDisplay.textContent = currentDisplay.join('');

  let buttons = document.querySelectorAll('.calc-button');
  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      screenDisplay.textContent += `${button.textContent}`
    });
  });
});