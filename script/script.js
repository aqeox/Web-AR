var menu = document.getElementById('menu'),
close_button = document.getElementById('close_button'),
nav = document.getElementById('nav'),
menu_button = document.getElementById('menu_button');

menu_button.addEventListener('click', event => {
    nav.style.display = 'none';
    menu.style.display = 'block';
});

close_button.addEventListener('click', event => {
    nav.style.display = 'block';
    menu.style.display = 'none';
});