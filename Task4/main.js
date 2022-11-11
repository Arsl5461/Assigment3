const display = document.querySelector('.counter-preview');
const incrementBtn = document.querySelector('#increment');
const resetBtn = document.querySelector('#reset');

incrementBtn.addEventListener('click', increment);
resetBtn.addEventListener('click', reset);

let value = 0;
function increment() {
  value += 1;
  display.textContent = value;
}


function reset() {
  value = 0;
  display.textContent = value;
}