function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

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


function onCreateBox() {
  const boxes = createBoxes(refs.input.value);
  refs.boxesCollection.append(...boxes)
};

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const randomColor = getRandomHexColor();
    const box = document.createElement('div');

    box.style.backgroundColor = randomColor;
    box.style.width = `${refs.width}px`;
    box.style.height = `${refs.height}px`;
    refs.width += 10;
    refs.height += 10;
    box.style.marginTop = '10px';
    boxes.push(box);
  };
  return boxes;
};

function onDestroyBox() {
  refs.boxesCollection.innerHTML = '';
  refs.width = 30;
  refs.height = 30;
};












