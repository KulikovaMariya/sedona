const burger = document.querySelector('.js-burger');
const shadow = document.querySelector('.js-shadow');
const nav = document.querySelector('.js-nav');

burger.addEventListener('click', ()=>{
  burger.classList.toggle('header__burger--active');
  shadow.classList.toggle('shadow--active');
  nav.classList.toggle('header__nav--active');
});


// shadow.addEventListener('click', ()=>{
//   burger.classList.remove('header__burger--active');
//   shadow.classList.remove('shadow--active');
//   nav.classList.remove('header__nav--active');
// });
