const expandbtn = document.querySelector('.expand-btn');
const search__wrapper = document.querySelector('.search__wrapper input')

expandbtn.addEventListener('click', () => {
	document.body.classList.toggle('collapsed');
})

search__wrapper.addEventListener('click', () =>{
	document.body.classList.remove('collapsed');
})