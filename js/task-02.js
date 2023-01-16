const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList);

ingredientsList.append(
  ...ingredients.map(item => {
    let itemList = document.createElement('li');
    itemList.textContent = item;
    return itemList;
  })
);
