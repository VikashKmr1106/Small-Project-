const newcomment_form = document.querySelector('#newcomment_form');
const newcommentTextarea = document.querySelector('#textarea');
const discussion_comments = document.querySelector('.discussion_comments');
const reset_Btn = document.querySelector('#reset_Btn');
const avatar = document.querySelector('.avatar');

const timeSince = (date) => {
	const seconds = Math.floor((new Date() - date) / 1000);
	let interval = seconds / 31536000;

	if (interval > 1) {
		return Math.floor(interval) + ' years ago';
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return Math.floor(interval) + ' months ago';
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return Math.floor(interval) + ' days ago';
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return Math.floor(interval) + ' hours ago';
	}
	interval = seconds / 60;
	if (interval > 1) {
		return Math.floor(interval) + ' minutes ago';
	}
	return 'just now'; // Remove seconds from here
};

// Function to update the time dynamically
const updateTime = (dateElement) => {
	const timeSinceText = timeSince(dateElement.date);
	dateElement.element.textContent = ' - ' + timeSinceText;
};

newcomment_form.addEventListener('submit', (event) => {
	event.preventDefault();
	event.stopPropagation();
	addComment();
});

const addComment = () => {
	let newcommentText = newcommentTextarea.value.trim();

	if (newcommentText) {
		const newCommentElement = document.createElement('div');
		newCommentElement.classList.add('discuss_container');

		newCommentElement.innerHTML = `
			<div class="profile_imgg">
				<img src="profile.webp" alt="" class="avatar" />
			</div>
			<div class="username_comment_maindiv">
				<div class="user_name" style="display: flex; justify-content: space-between; width: 100%;">
					<h3>Your Name</h3>
					<p class="comment_time"></p>
				</div>
				<div class="comment_box">
					<p>${newcommentText}</p>
				</div>
			</div>
		`;

		// Get the first child of discussion_comments
		const firstComment = discussion_comments.firstChild;

		// Insert the new comment before the first child
		discussion_comments.insertBefore(newCommentElement, firstComment);

		// Clear the textarea
		newcommentTextarea.style.height = '3rem';
		newcommentTextarea.value = '';
		avatar.style.padding = 'none';
		avatar.style.border = 'none';

		// Schedule the time update every second
		const currentDate = new Date();
		const commentTimeParagraph = newCommentElement.querySelector('.comment_time');
		const dateElement = { element: commentTimeParagraph, date: currentDate };
		setInterval(() => updateTime(dateElement), 0);

		moveLabel();
	}
};


// Listen for Enter key press on the textarea
newcommentTextarea.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		event.preventDefault();
		event.stopPropagation();
		addComment();
		moveLabel(); // Call moveLabel after adding comment
		// If the textarea is empty, reset its height and label position
		if (newcommentTextarea.value.trim() === '') {
			newcommentTextarea.style.height = '3rem';
			label.style.transform = 'translateY(-0%)';
			label.style.color = '#888888';
			label.style.background = 'none';
			label.style.border = 'none';
		}
		newcommentTextarea.blur();
	}
});

// Function to handle focus event on textarea
const handleTextareaFocus = () => {
	newcommentTextarea.style.height = '5rem';
	avatar.style.padding = '3px';
	avatar.style.border = '2px solid var(--primary)';
	moveLabel();
};

// Function to handle blur event on textarea
const handleTextareaBlur = () => {
	// Set the height to 3rem when blurred if the textarea is empty
	if (newcommentTextarea.value.trim() === '') {
		newcommentTextarea.style.height = '3rem';
		avatar.style.padding = 'none';
		avatar.style.border = 'none';
	}
	moveLabel();
};

// Add event listeners for focus and blur events on textarea
newcommentTextarea.addEventListener('focus', handleTextareaFocus);
newcommentTextarea.addEventListener('blur', handleTextareaBlur);

// Add event listener for reset button click
reset_Btn.addEventListener('click', () => {
	// Clear the textarea value
	newcommentTextarea.value = '';

	// Set the height to 5rem when resetting
	newcommentTextarea.style.height = '5rem';

	// Trigger blur event to adjust height if textarea is empty
	handleTextareaBlur();
	moveLabel();
});

const input = document.getElementById('textarea');
const label = document.querySelector('.md-textbox label');

input.addEventListener('input', function (event) {
	input.classList.toggle('has-value', event.target.value);
	moveLabel();
});

input.addEventListener('focus', moveLabel);

function moveLabel() {
	if (input.value || input === document.activeElement) {
		label.style.transform = 'translateY(-140%)';
		label.style.color = '#fff';
		label.style.background = 'var(--primary)';
		label.style.border = '1px solid var(--grey-border)';
	} else {
		label.style.transform = 'translateY(-0%)';
		label.style.color = '#888888';
		label.style.background = 'none';
		label.style.border = 'none';
	}
}
moveLabel();

// const users = {
// 	'alex1' : {
// 		name : 'Alex Cooper',
// 		src : 'asset/img1.jpg'
// 	}
// }
// const loggerUser = users['alex1'];

// let comments =[
// 	{
// 		id : 1,
// 		text : 'Thank everyone!',
// 		author : users[alex1]
// 	}
// ]
