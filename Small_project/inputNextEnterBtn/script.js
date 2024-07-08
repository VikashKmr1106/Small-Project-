let container = document.querySelector('.container');
let inputfield = document.querySelectorAll('.inputField');
let form = document.querySelector('#form');


for (let i = 0; i < inputfield.length; i++) {
	inputfield[i].addEventListener('keyup', (e) => {
		let currentInput = e.target;
			if (e.keyCode === 13 && e.key === 'Enter') {
					console.log('Enter key pressed...');
					e.preventDefault();
					if (currentInput.parentElement.nextElementSibling.querySelector('input')) {
							currentInput.parentElement.nextElementSibling.querySelector('input').focus();
					}
			} else if (e.keyCode === 8 && e.key === 'Backspace' && e.target.value === '' && i > 0) {
					console.log('Backspace key pressed...');
					e.preventDefault();
					// let currentInput = e.target;
					currentInput.parentElement.previousElementSibling.querySelector('input').focus();
			}
	});
}


// for (let i = 0; i < inputfield.length; i++) {
// 	inputfield[i].addEventListener('keyup', (e) => {
// 			if (e.keyCode === 13 && e.key === 'Enter' && i < inputfield.length - 1) {
// 					e.preventDefault();
// 					inputfield[i + 1].focus();
// 			} else if (e.keyCode === 8 && e.key === 'Backspace' && i > 0 && e.target.value === '') {
// 				inputfield[i - 1].focus();
// 			}
// 	});
// }
