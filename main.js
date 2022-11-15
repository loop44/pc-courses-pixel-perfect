document.getElementById('mobile-menu').addEventListener('click', (e) => {
  e.currentTarget.classList.add('active');
});

document.getElementById('close-mobile').addEventListener('click', (e) => {
  document.getElementById('mobile-menu').classList.remove('active');
  e.stopPropagation();
});
