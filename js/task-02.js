const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const listElement = document.createElement(`li`);
listElement.classList.add('item');
  
const markUpListIngredient = ingredients
  .map((ingredient) => list.textContent = `${ingredient}</br>`)
  .join("");

list.innerHTML = markUpListIngredient;  
console.log(markUpListIngredient);