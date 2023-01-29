const refs = {
    input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('blur', isValidInput);

function isValidInput(event) {
    if (event.currentTarget.value.length === 6) {
        refs.input.classList.remove('invalid');
        refs.input.classList.add('valid');
    } else {
        refs.input.classList.remove('valid');
        refs.input.classList.add('invalid')
    }
}