const buttons = document.querySelectorAll('.btn');
const output = document.querySelector('.output');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.eq');
const op = document.querySelectorAll('.func');
let num = "";
let operator;
let result = 0;

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        num += e.target.textContent;
        output.textContent = num;
        console.log(num);
    })
})

op.forEach(btn => {
    btn.addEventListener('click', e=> {
        operator = e.target.textContent;
    })
})



// Clear button
clear.addEventListener('click', () => {
    output.textContent = "0000";
    num = "";
})

// Equal button
equal.addEventListener('click', () => {
    operate(num);
});


function operate(str) {
    let a,b;
    let result;

    switch (operator) {
        case 'x': 
            a = str.split('x')[0];
            b = str.split('x')[1];
            b = str = b.substring(0, b.length - 1);
            result = a * b;
            num = result;
            output.textContent = result;
            break;
        case '÷': 
            a = str.split('÷')[0];
            b = str.split('÷')[1];
            b = str = b.substring(0, b.length - 1);
            result = a / b;
            num = result;
            output.textContent = result;
            break;
        case '+':
            a = str.split('+')[0];
            b = str.split('+')[1];
            b = str = b.substring(0, b.length - 1);
            a = Number(a);
            b = Number(b);
            result = a + b;
            num = result;
            output.textContent = result;
            break;
        case '-':
            a = str.split('-')[0];
            b = str.split('-')[1];
            b = str = b.substring(0, b.length - 1);
            result = a - b;
            num = result;
            output.textContent = result;
            break;

    }
}