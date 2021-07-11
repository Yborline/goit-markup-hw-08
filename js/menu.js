(() => {
  const refs = {
    openMenuBtn: document.querySelector('.button__menu'),
    closeMenuBtn: document.querySelector('.button-close-menu'),
    menu: document.querySelector('.mobile-nav'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();