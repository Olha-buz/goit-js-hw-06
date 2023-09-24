const fontSizeControl = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
    const textSize = fontSizeControl.value;
    textElement.style.fontSize = `${textSize}px`;
});