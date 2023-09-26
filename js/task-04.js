let counterValue = 0;
const counterValueElement = document.querySelector('#value');
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');

btnMinus.addEventListener('click', () => {
    counterValue--;
    counterValueElement.textContent = counterValue;
});

btnPlus.addEventListener('click', ()=> {
    counterValue++;
    counterValueElement.textContent = counterValue;
});

console.log(counterValue);