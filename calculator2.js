// Working calculator2.js
const divAnswer = document.getElementById('divAnswer');
const numberBtns = document.querySelectorAll('.numberBtns button');
const operatorBtns = document.querySelectorAll('.operatorBtns button');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');

function alertWindow() {
    let message = alert("This is a basic calculator capable of basic operations. Please use appropriate values for best results."); 
}

alertWindow(); 

let n1 = '';
let n2 = '';
let operator = null;

// Append digits to current operand and update display
numberBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const digit = e.target.textContent;
        if (!operator) {
            n1 += digit;
            divAnswer.textContent = n1;
        } else {
            n2 += digit;
            divAnswer.textContent = n2;
        }
    });
});

// Operator selection and chaining
operatorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (n1 === '') return; // need a first number
        if (operator && n2 !== '') {
            const op = compute(parseInt(n1, 10), operator, parseInt(n2, 10));
            n1 = inter === 'Error' ? '' : String(inter);
            n2 = '';
            divAnswer.textContent = n1;
        }
        operator = e.target.textContent;
        divAnswer.textContent = '';
    });
});

equalsBtn.addEventListener('click', () => {
    if (n1 === '' || operator === null || n2 === '') return;
    const result = compute(parseInt(n1, 10), operator, parseInt(n2, 10));
    divAnswer.textContent = String(result);
    n1 = result === 'Error' ? '' : String(result);
    n2 = '';
    operator = null;
});

clearBtn.addEventListener('click', () => {
    n1 = '';
    n2 = '';
    operator = null;
    divAnswer.textContent = '';
});

function compute(a, op, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) return '';
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b === 0 ? 'Error' : Math.floor(a / b);
        default: return '';
    }
}





