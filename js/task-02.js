const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList);

for (const ingredient of ingredients) {
  const list = document.createElement('li');
  list.classList.add('item');
  list.textContent = ingredient;
  ingredientsList.append(list);
}
