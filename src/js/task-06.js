const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', () => {
    const expectedLength = Number(inputElement.dataset.length);
    const inputValue = inputElement.value;

    if (inputValue.length === expectedLength) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
    }
});