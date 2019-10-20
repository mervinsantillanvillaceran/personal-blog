document.getElementById('toggle-theme').addEventListener('click', function(e) {
    let html = document.getElementsByTagName("html");
    html[0].classList.add('mode-dark');
});
