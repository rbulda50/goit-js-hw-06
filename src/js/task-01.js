// #Task 1

const elementsList = document.querySelector('#categories');

const categoryNumber = (list) => {
    return list.querySelectorAll('.item').length;
}

console.log('Number of categories: ', categoryNumber(elementsList));



// #Task 2

const listEl = list => {
    console.log(list)
    const elementsUl = list.querySelectorAll('.item');

    elementsUl.forEach(element => {
    const nameOfCategory = element.querySelector('h2');
        console.log('Category: ', nameOfCategory.textContent);

    const categotyLength = element.querySelectorAll('ul li');
    console.log('Elements: ', categotyLength.length);
    });
}

listEl(elementsList);