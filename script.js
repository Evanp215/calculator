document.addEventListener("DOMContentLoaded", function() {
  let screenDisplay = document.querySelector('#screen-display');
  screenDisplay.textContent = '';

  let buttons = document.querySelectorAll('.calc-button');
  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      if(button.id == 'clear') {
        screenDisplay.textContent = ''
      }
      else {
        screenDisplay.textContent += `${button.textContent}`
      }
    });
  });
});
