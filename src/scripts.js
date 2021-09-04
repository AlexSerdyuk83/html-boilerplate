const menu = document.querySelector('.menu');

menu.addEventListener('click', (e) => {
  const activeElem = document.querySelector('.active');
  const currElement = e.target;
  activeElem.classList.remove('active');
  currElement.classList.add('active');
});
