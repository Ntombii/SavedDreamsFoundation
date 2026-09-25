const menuButton = document.getElementById("menuBtn");
const navigationMenu = document.getElementById("navMenu");

if (menuButton && navigationMenu) {
	const setMenuOpen = (isOpen) => {
		navigationMenu.classList.toggle("open", isOpen);
		menuButton.setAttribute("aria-expanded", String(isOpen));
		menuButton.setAttribute(
			"aria-label",
			isOpen ? "Close navigation menu" : "Open navigation menu"
		);
	};

	menuButton.addEventListener("click", () => {
		setMenuOpen(!navigationMenu.classList.contains("open"));
	});

	navigationMenu.addEventListener("click", (event) => {
		if (event.target instanceof HTMLAnchorElement) {
			setMenuOpen(false);
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			setMenuOpen(false);
		}
	});
}
