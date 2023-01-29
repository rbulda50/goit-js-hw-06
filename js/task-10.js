const refs = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('#controls > input'),
  boxesCollection: document.querySelector('#boxes'),
  width: 30,
  height: 30,
};

refs.createBtn.addEventListener('click', onCreateBox);
refs.destroyBtn.addEventListener('click', onDestroyBox);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


function onCreateBox(event) {
  const boxes = createBoxes(refs.input.value);
  refs.boxesCollection.append(...boxes);
};


function onDestroyBox(event) {
  refs.boxesCollection.innerHTML = '';
  refs.width = 30;
  refs.height = 30;
};


function createBoxes(amount) {
  const colors = [];

  for (let i = 0; i < amount; i += 1) {
    colors.push(getRandomHexColor());
  };
  return colors.map((color) => {
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = color;
    newBox.style.width = `${refs.width}px`;
    newBox.style.height = `${refs.width}px`;
    newBox.style.marginTop = '5px';
    refs.width += 10;
    refs.height += 10;

    return newBox;
  });
};











