const refs = {
    inputPlace: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.inputPlace.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === "") {
        refs.output.textContent = "Anonymous";
    } else {
    refs.output.textContent = event.currentTarget.value;
    };
};