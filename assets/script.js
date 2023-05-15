document.querySelector('#mobile-menu-btn').addEventListener('click', () => {
  const d = document.getElementsByClassName('popup-menu');
  for (let i = 0; i < d.length; i += 1) {
    d[i].className += ' popup-menu-active';
  }
});

document.querySelector('#popup-close-btn').addEventListener('click', () => {
  const d = document.getElementsByClassName('popup-menu');
  for (let i = 0; i < d.length; i += 1) {
    d[i].classList.remove('popup-menu-active');
  }
});

document.querySelector('.popup-menu ul').addEventListener('click', () => {
  const d = document.getElementsByClassName('popup-menu');
  for (let i = 0; i < d.length; i += 1) {
    d[i].classList.remove('popup-menu-active');
  }
});
