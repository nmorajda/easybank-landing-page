import '../scss/main.scss';

window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const btnHamburger = document.querySelector('.btn-hamburger');
  const header = document.querySelector('.header');
  const dropdown = document.querySelectorAll('.has-dropdown');

  // mobile menu
  const handleBtnHamburger = () => {
    body.classList.toggle('overflow-hidden');
    btnHamburger.classList.toggle('btn-hamburger--open');
    header.classList.toggle('mobile-nav--active');
  };

  // dropdown
  const handleDropdown = e => {
    if (e.target.closest('.has-dropdown')) {
      e.preventDefault();
      const current = e.target.closest('.has-dropdown');

      // disabled all dropdown without clicked
      dropdown.forEach(content => {
        if (content !== current) {
          content.classList.remove('is-active');
        }
      });

      current.classList.toggle('is-active');
    }
  };

  // EVENTS
  // mobile menu open/close
  btnHamburger.addEventListener('click', handleBtnHamburger);

  // dropdown menu
  document.addEventListener('click', handleDropdown);
});
