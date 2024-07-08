// document.addEventListener('DOMContentLoaded', function () {
// 	var btn = document.querySelector('.btn');
// 	var overlay = document.querySelector('.overlay');

// 	btn.addEventListener('click', function () {
// 			overlay.classList.add('open');
// 	});
// });

let signup = document.querySelector('.signup');
signup.addEventListener('click', () => {
	var overlay = document.querySelector('.modal-1-overlay');
	overlay.classList.toggle('open');
})

// function toggleModal() {
// 	var overlay = document.querySelector('.modal-1-overlay');
// 	overlay.classList.toggle('open');
// }