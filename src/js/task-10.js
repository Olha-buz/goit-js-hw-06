function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const numberInput = document.querySelector('#controls input');
const btnCreate = document.querySelector('button[data-action=create]');
const btnDestroy = document.querySelector('button[data-action=destroy]');
const divBoxes = document.querySelector('#boxes');

function getAmount() {
  let amount = numberInput.value;
  createBoxes(amount);
};

function createBoxes(amount) {
  const newDiv = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const div = document.createElement('div');
    const hexColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.heigth = `${size}px`;
    div.style.backgroundColor = `${hexColor}`;
    newDiv.appendChild(div);  
  }
  divBoxes.appendChild(newDiv);
};

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

btnCreate.addEventListener('click', getAmount());
btnDestroy.addEventListener('click', destroyBoxes());
