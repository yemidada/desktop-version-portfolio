
document.querySelector('#mobile-menu-btn').addEventListener('click', function () {
    var d = document.getElementsByClassName("popup-menu");
    for (var i = 0; i < d.length; i++) {
        d[i].className += " popup-menu-active";
    }
});

document.querySelector('#popup-close-btn').addEventListener('click', function () {
    var d = document.getElementsByClassName("popup-menu");
    for (var i = 0; i < d.length; i++) {
        d[i].classList.remove("popup-menu-active");
    }
});

document.querySelector('.popup-menu-item a').addEventListener('click', function () {
    var d = document.getElementsByClassName("popup-menu");
    for (var i = 0; i < d.length; i++) {
        d[i].classList.remove("popup-menu-active");
    }
});
