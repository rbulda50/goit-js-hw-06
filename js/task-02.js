const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientEl = (list) => {

  return list.map(ingredient => {

    const elLi = document.createElement('li');
    elLi.textContent = ingredient;

    elLi.classList.add('item');

    return elLi;
  })
}

const ingredientList = document.querySelector('#ingredients');
const ingredientCollection = ingredientEl(ingredients);
ingredientList.append(...ingredientCollection);




