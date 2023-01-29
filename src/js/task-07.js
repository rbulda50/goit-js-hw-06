const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onFontSizeRange);

console.dir(refs.text);

function onFontSizeRange(event) {

    refs.text.style.fontSize = `${event.currentTarget.value}px`;
};


