const textarea = document.getElementById('textarea');
const submit = document.getElementById('submit');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

submit.addEventListener('click', (event) => {
  event.preventDefault();

  let textarea_value = textarea.value;
  console.log('hello', textarea_value);

  tasks.push(textarea_value);
  localStorage.setItem('task', JSON.stringify(tasks));

  textarea.value = '';
});

