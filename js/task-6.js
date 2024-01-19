function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divCollection = document.querySelector('div#boxes');

btnCreate.addEventListener('click', () => createBoxes(inputNumber.value));
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  if (1 <= amount && amount <= 100) {
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();

      divCollection.appendChild(box);
      size += 10;
    }
    inputNumber.value = '';
  }
}

function destroyBoxes() {
  divCollection.innerHTML = '';
}
