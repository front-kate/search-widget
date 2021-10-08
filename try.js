const openBtn = document.querySelector('.btn');
const goBtn = document.querySelector('.btn-2');
const searchBox = document.querySelector('.searchBox');
const redo = document.querySelector('.redo');


openBtn.addEventListener('click', ()=> {
  goBtn.style.transform = 'scale(1)';
  openBtn.classList.add('appear');
  searchBox.style.transform = 'scale(1)';  
  searchBox.value = '';
  redo.style.opacity = '1';
})


goBtn.addEventListener('click', () => {
  goBtn.href = `https://www.google.com/search?q=${searchBox.value}`;
  searchBox.value = ''
})

searchBox.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    goBtn.click();    
  }
})

redo.addEventListener('click', () => {
  openBtn.classList.remove('appear');
  goBtn.style.transform = 'scale(0)';
  searchBox.style.transform = 'scale(0)'; 
  redo.style.opacity = '0';
});