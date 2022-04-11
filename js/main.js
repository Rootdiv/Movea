'use strict';

const modalWindow = document.querySelector('.modal');
const buttonsPlay = document.querySelectorAll('.button-play__wrap');
const iframe = document.getElementById('video');
const url = iframe.getAttribute('src');

const disableScroll = () => {
  document.body.dataset.scrollY = window.scrollY;

  const scrollWidth = window.innerWidth - document.body.offsetWidth;

  document.body.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    left: 0;
    width: 100%;
    overflow: hidden;
    heigh: 100vh;
    padding-right: ${scrollWidth}px;
  `;
};

const enableScroll = () => {
  document.body.removeAttribute('style');
  window.scroll({
    top: document.body.dataset.scrollY,
  });
};

buttonsPlay.forEach(elem => {
  elem.addEventListener('click', () => {
    modalWindow.classList.add('active');
    iframe.setAttribute('src', url);
    disableScroll();
  });
});

modalWindow.addEventListener('click', () => {
  modalWindow.classList.remove('active');
  iframe.removeAttribute('src');
  enableScroll();
});
