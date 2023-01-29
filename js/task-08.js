const refs = {
    form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    }

    if (formElements.email.value === '' || formElements.password.value === '') {
        console.error('Поля для вводу значень пусті!')
    } else {
        console.log(formData);
    event.currentTarget.reset();
    }
};


