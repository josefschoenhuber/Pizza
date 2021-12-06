export const hamburgerToggle = () => {
  const wrapper = document.querySelector('.header__hamburger');
  const button  = document.querySelector('.header__hamburgerIcon');

  if (!wrapper) return;

  button.addEventListener('click', () => {
    wrapper.classList.toggle('header__hamburger--active');
  })
}