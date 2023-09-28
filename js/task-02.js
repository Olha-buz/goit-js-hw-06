const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const listIngredient = ingredients.map((ingredient) => {
  const listElement = document.createElement(`li`);

  listElement.textContent = ingredient;
  listElement.classList.add('item');
  list.append(listElement);
});

console.log(listIngredient);