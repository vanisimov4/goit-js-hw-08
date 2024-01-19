function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btnChangeColor = document.querySelector('button.change-color');
const spanColor = document.querySelector('span.color');

btnChangeColor.addEventListener('click', handleChangeColor);

function handleChangeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
}
