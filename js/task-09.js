function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  body: document.querySelector('body'),
  btnChangeColor: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
};

refs.btnChangeColor.addEventListener('click', onChangeColor);


function onChangeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorValue.textContent = getRandomHexColor();
};
