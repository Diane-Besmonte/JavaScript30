const nav = document.querySelector('#main');
const topNav = nav.offsetTop;

function fixedNav() {
    if(window.scrollY >= topNav) {
        //nav.style.position = 'sticky';
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixedNav);