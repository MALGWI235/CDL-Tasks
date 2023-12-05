let currentDisplayValue = '';
currentOperation = '';

function appendToDisplay(content) {
    currentDisplayValue += content;
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    if (displayElement) {
        displayElement.value = currentDisplayValue
    }
} 

function clearDisplay() {
    currentDisplayValue = '0';
    currentOperation = '';
    updateDisplay();
}

function removeLastValue() {
    currentDisplayValue = currentDisplayValue.slice(0, -1);
    updateDisplay();
}

function appendOperation(operation) {
    if (operation === 'x') {
        operation = '*';
    }
    currentDisplayValue += '' + operation + '';
    updateDisplay();
}

function calculate() {
    const result = eval(currentDisplayValue);
    currentDisplayValue = result.toString();
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', function () {
    const styleSlider = document.getElementById('style-slider');
    const colorSchemeLink = document.getElementById('color-scheme');

    styleSlider.addEventListener('input', function() {
        const styleValue = styleSlider.value;
        colorSchemeLink.href = `/calculator-app-main/styles/styles-theme${styleValue}.css`
    })
})