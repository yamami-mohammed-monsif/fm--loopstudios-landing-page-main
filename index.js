const navToggle = document.getElementById('hamburger-button');
const navigationBar = document.getElementById('primary-navigation');


navToggle.addEventListener('click', () => {

    var visibility = navigationBar.getAttribute('data-visible');

    if(visibility === 'false') {
        navigationBar.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        navigationBar.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})