
const btn = document.getElementById('btn');
const root = document.getElementById('root');
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');
const reset = document.getElementById('reset');
const display = document.getElementById('display');

let count = 0;

// when you click the "ClickME" button, show the counter section
btn.addEventListener('click', () => {
    root.style.display = "block"; // make it visible
});

// increment
inc.addEventListener('click', () => {
    count++;
    display.textContent = count;
});

// decrement
dec.addEventListener('click', () => {
    count--;
    display.textContent = count;
});

// reset
reset.addEventListener('click', () => {
    count = 0;
    display.textContent = count;
});


