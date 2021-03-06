let percentOne = (document.getElementById('percentOne'));
let percentTwo = document.getElementById('percentTwo');
const btn = document.getElementById("submit");
const result = document.getElementById('result');
const swap = document.querySelector('swap');

function percentDiff(a, b) {
    const c = b - a;
    const apnd = c > 0 ? '% increase' : '% decrease'
    const diff = a / 100;
    if(Number.isInteger(Math.abs(c/diff))) {
        return Math.abs(c/diff) + apnd;
    } else {
        return Math.abs(c/diff).toFixed(2) + apnd;
    }
}


btn.addEventListener('click', function(e) {
    if(!percentTwo.value || !percentOne.value) {
        result.innerText = "Please enter numbers in both fields."
    } else {
        result.innerText = percentDiff(percentOne.value, percentTwo.value);
    }
    e.preventDefault();
});