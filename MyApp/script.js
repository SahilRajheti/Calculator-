const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;
    const text = e.target.textContent;
    if (text === 'C') clearDisplay();
    else if (text === '=') calculateResult();
    else appendValue(text);
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
