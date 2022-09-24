const buttons = document.querySelectorAll('.btn');
const output = document.querySelector('.output');
let num1;

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        num1 = e.target.textContent;
        console.log(num1);
        console.log(typeof num1);
        output.textContent = num1;
    })
})