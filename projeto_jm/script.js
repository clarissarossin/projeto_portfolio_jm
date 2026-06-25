const btn  = document.querySelector('.nav-toggle');
const nav  = document.querySelector('.nav');

btn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav--open');
  btn.classList.toggle('nav-toggle--open', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
});

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    btn.classList.remove('nav-toggle--open');
    btn.setAttribute('aria-expanded', false);
  });
});