let circle = document.querySelector('.circle');
let change1 = document.querySelector('.change_1');
let change2 = document.querySelector('.change_2');
let change3 = document.querySelector('.change_3');


circle.addEventListener('click', ()=> {
    if(circle.className === 'circle') {
        circle.classList.add('slide');
        change1.innerText = '199.99';
        change2.innerText = '249.99';
        change3.innerText = '399.99';
    }
    else {
        const rot = document.querySelector('h1');
        circle.classList.remove('slide');
        change1.innerText = '19.99';
        change2.innerText = '24.99';
        change3.innerText = '39.99';
    }
});