const globalNavigation = () => {
  const toggleClass = (el) => el && el.classList.toggle('is-active');
  
  const fixScroll = () => {
    const target = document.querySelector('body');
    const scrollPos = window.scrollY;
    target.style.position = 'fixed';
    target.style.top = `-${scrollPos}px`;
    target.style.left = '0';
  };

  const cancelFixScroll = () => {
    const target = document.querySelector('body');
    const fixedPos = Number(target.style.top.replace(/px|-/g, ''));
    target.style.position = 'static';
    window.scrollTo(0, fixedPos);
  };

  const target = document.querySelector('.js-gnav');
  const open = target.querySelector('.js-gnav-open');
  const close = target.querySelector('.js-gnav-close');
  const overlay = target.querySelector('.js-gnav-overlay');

  open.addEventListener('click', () => {
    fixScroll();
    toggleClass(target);
  });

  close.addEventListener('click', () => {
    toggleClass(target);
    cancelFixScroll();
  });

  overlay.addEventListener('click', () => {
    toggleClass(target);
    cancelFixScroll();
  });
};

window.addEventListener('DOMContentLoaded', globalNavigation());