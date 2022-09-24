const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log(e.target.textContent);
    })
})