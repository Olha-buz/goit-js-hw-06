function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const selectors = {
input: document.querySelector('.js-input'),
create: document.querySelector('.js-create'),
destroy: document.querySelector('js-destroy'),
box: document.querySelector('#boxes')
}

selectors.create.addEventListener('click', handlerCreate);
selectors.destroy.addEventListener('click', handlerDestroy);

function handlerCreate() {
  const amount = Number(selectors.input.value);
  createBoxes(amount);
}

function handlerDestroy() {
  selectors.box.innerHTML = '';
}

function createBoxes(amount) {
  handlerDestroy();
  let size = 20;
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const div = document.createElement('div');
    div.style.width=`${size}px`;
    div.style.height=`${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
  }
  selectors.box.append(...elements);
}