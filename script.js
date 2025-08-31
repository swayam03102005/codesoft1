const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
    } else if (value === 'DEL') {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';
    } else if (value === '=') {
      try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    } else {
      if (resultDisplayed && !['+', '-', '*', '/'].includes(value)) {
        currentInput = value;
        resultDisplayed = false;
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});
