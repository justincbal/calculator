const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.op');
const output = document.querySelector('.output');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.eq');

let number = "";
let number2 = "";
let operator = "";
let result = "";
let sym = /[ -\/:-@\[-\`รทx{-~]/gm



// NUMBERS
numbers.forEach(num => {
    num.addEventListener('click', (e) => {
        
        if (number.length !== 0 && operator.length !== 0) {
            number2 += e.target.textContent;
            output.textContent = number2;
        }
        else {
            number += e.target.textContent;
            output.textContent = number;
        }
        
        

        console.log(`Num 1: ${number}`);
        console.log(`Opera: ${operator}`);
        console.log(`Num 2: ${number2}`);
    })
})

// OPERATORS
operators.forEach(op => {
    op.addEventListener('click', (e) => {
        if (sym.test(number)) {number = number.substring(0, number.length)}

        operator = e.target.textContent;
        output.textContent = operator;
    })
})

// CLEAR
clear.addEventListener('click', () => {
    number = "";
    number2 = "";
    operator = "";
    output.textContent = "0";
})

// CALCULATE 
equal.addEventListener('click', ()=>{
    operate(number, number2, operator);
    console.log(`Num 1: ${number}`);
        console.log(`Opera: ${operator}`);
        console.log(`Num 2: ${number2}`);
})

function operate(n1, n2, op) {
    switch(op) {
        case 'x':
            result = n1 * n2;
            number = result;
            output.textContent = result;
            break;
        case '÷':
            result = n1 / n2;
            number = result;
            output.textContent = result;
            break;
        case '+':
            result = +n1 + +n2;
            number = result;
            output.textContent = result;
            break;
        case '-':
            result = n1 - n2;
            number = result;
            output.textContent = result;
            break;
    }
}