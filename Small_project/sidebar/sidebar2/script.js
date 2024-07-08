// const toggleSidebar = () => {
// 	document.body.classList.toggle('open');
// }

const toggleSidebar = () => {
	const body = document.body;
	body.classList.toggle('open');

	const sidebarBurger = document.querySelector('.sidebar-burger');
	if (body.classList.contains('open')) {
		// Sidebar is open, show X-mark icon
		sidebarBurger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
	} else {
		// Sidebar is closed, show bars icon
		sidebarBurger.innerHTML = '<i class="fa-solid fa-bars"></i>';
	}
}
