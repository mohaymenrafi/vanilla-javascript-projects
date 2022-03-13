const open = document.getElementById('open');
const close = document.getElementById('close');
const content = document.getElementById('modal-content');

const handleClick = () => {
  content.classList.toggle('content-visible');
};

open.addEventListener('click', handleClick);
close.addEventListener('click', handleClick);
