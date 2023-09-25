function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const nameColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', () => {
  const hexColor = getRandomHexColor();
  console.log(hexColor);
  body.style.backgroundColor = `${hexColor}`;
  nameColor.textContent = `${hexColor}`;
});