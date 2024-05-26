let displayValue = '';

function appendCharacter(char) {
    displayValue += char;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue || '0';
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (e) {
        displayValue = 'Error';
    }
    updateDisplay();
}
