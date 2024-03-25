let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click", function() {
    document.body.classList.toggle('open');
});

let menu_btn = document.querySelector('.hamburger');
menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active')
})
