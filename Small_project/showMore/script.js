let showBtn = document.querySelector('.show__button');
let text = document.querySelector('.text');
let dot = document.querySelector('.dot');
let more_text = document.querySelector('.more_text');

showBtn.addEventListener('click' , (event) => {
	 text.classList.toggle('textMore');

	 if(showBtn.innerText === 'Show More'){
		showBtn.innerText = 'Read Less';
		dot.style.display = "none";
	 }
	 else{
		showBtn.innerText = 'Show More';
		dot.style.display = "inline-block";
	 }

})