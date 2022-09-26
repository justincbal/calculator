const buttons = document.querySelectorAll('.num');
const output = document.querySelector('.output');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.eq');
const op = document.querySelectorAll('.func');
let num = "";
let num2;
let operator = "";
let result = 0;
let sym = /[ -\/:-@\[-\`÷x{-~]/gm

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        // num = e.target.textContent;
        // output.textContent = num;
        
        if (num.length !== 0 && operator.length !== 0) {
            num2 = e.target.textContent;
            output.textContent = num2;
        }
        else {
            num = e.target.textContent;
            output.textContent = num;
        }

        console.log(`Number 1: ${num}`);
        console.log(`operator: ${operator}`);
        console.log(`Number 2: ${num2}`);
    })
})

op.forEach(btn => {
    btn.addEventListener('click', e=> {
        if (sym.test(num)) {num = num.substring(0, num.length)}

        operator = e.target.textContent;
        output.textContent = operator;
        console.log(operator);
    })
})



// Clear button
clear.addEventListener('click', () => {
    output.textContent = "0000";
    num = "";
})

// Equal button
equal.addEventListener('click', () => {
    operate(num, num2, operator);
});


function operate(n1, n2, op) {
    let result;

    switch (op) {
        case 'x': 
            result = n1 * n2;
            num = result;
            output.textContent = result;
            break;
        case '÷': 
            result = n1 / n2;
            num = result;
            output.textContent = result;
            break;
        case '+':
            n1 = Number(n1);
            n2 = Number(n2);
            result = n1 + n2;
            num = result;
            output.textContent = result;
            break;
        case '-':
            result = n1 - n2;
            num = result;
            output.textContent = result;
            break;

    }
}