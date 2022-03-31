/*ABRIR MENU*/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show");
		});
	}
};

showMenu("nav-toggle", "nav-menu");

/*ATIVAR E REMOVER MENU*/
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
	//ativar o link
	navLink.forEach((n) => n.classList.remove("active"));
	this.classList.add("active");

	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*SCROLL REVEAL */
const sr = ScrollReveal({
	origin: "top",
	distance: "80px",
	duration: 2000,
	reset: true,
});

/*HOME*/
sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social-icon", { interval: 200 });

/*SOBRE*/
sr.reveal(".about-img", {});
sr.reveal(".babout-subtitle", { delay: 200 });
sr.reveal(".babout-text", { delay: 400 });

/*SKILLS*/
sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-text", { delay: 200 });
sr.reveal(".skills-data", { dinterval: 200 });
sr.reveal(".skills-img", { delay: 400 });

/*PROJETOS*/
sr.reveal(".work-img", { dinterval: 200 });
