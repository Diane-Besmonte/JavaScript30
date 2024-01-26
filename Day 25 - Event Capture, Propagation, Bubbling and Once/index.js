const divs = document.querySelectorAll('div');
const btn = document.querySelector('button');
function logText(e) {
    console.log(this.classList.value);
    //e.stopPropagation(); //stop bubbling
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, // if true result from three two one to one two three
    once: true
}));

btn.addEventListener('click', () => {
    console.log('Clicked!');
}, {
    once: true
})