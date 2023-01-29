const counter = {
    value: 0,
    increment() {        
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const refs = {
    btnIncrement: document.querySelector('[data-action="increment"]'),
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    counterValue: document.querySelector('#value'),
};

refs.btnIncrement.addEventListener('click', onValueIncrement);
refs.btnDecrement.addEventListener('click', onValueDecrement);

function onValueIncrement(event) {
    // console.log(event);
    counter.increment();

    refs.counterValue.textContent = counter.value;
};

function onValueDecrement(event) {
    // console.log(event);
    counter.decrement();
    refs.counterValue.textContent = counter.value;
};