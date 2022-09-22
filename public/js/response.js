let hamburger = document.getElementById('hamburger');
let nav = document.getElementById('nav');
hamburger.addEventListener('click', function() {
    if(hamburger.classList.contains('open')) {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    } else {
        hamburger.classList.add('open');
        nav.classList.add('open');
    }
});