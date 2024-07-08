

let progressSection = document.querySelector('.progress_section');
let progressBar = document.querySelector('.progress_bar');
let progressNum = document.querySelector('.progress_num');

let x, y;

window.addEventListener('mousemove', (e) => {
	x = e.clientX;
	y = e.clientY;
	// updateProgressBar();
});

function updateProgressBar() {
	progressSection.style.transform = `translate(${x}px, ${y}px)`;
	progressBar.style.height = `${getScrollPercentage()}%`;
	progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`;
	requestAnimationFrame(updateProgressBar);
}

function getScrollPercentage() {
	return (
		(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
	);
}

updateProgressBar();
