function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');

const buttonColor = document.querySelector('.change-color');
console.log(buttonColor);
buttonColor.addEventListener('click', changeColor);

const spanColor = document.querySelector('.color');
console.log(spanColor);

function changeColor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanColor.textContent = color;
}
