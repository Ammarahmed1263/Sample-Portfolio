const menuToggle = document.querySelector(".menu-toggle");
const navItems = document.querySelector(".nav-wrapper ul");
const navLinks = document.querySelectorAll(".nav-wrapper ul li a");
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");
const overlay = document.querySelector(".overlay");

function closeMenu() {
  navItems.classList.remove("show");
  overlay.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
}

function openMenu() {
  navItems.classList.add("show");
  overlay.classList.add("active");
  menuToggle.setAttribute("aria-expanded", "true");
}

function filterProjects(filter) {
  projects.forEach((project) => {
    const category = project.getAttribute("data-category") || "";
    const shouldHide = filter !== "all" && !category.includes(filter);
    project.classList.toggle("hidden", shouldHide);
  });
}

menuToggle.addEventListener("click",openMenu);

overlay.addEventListener("click", closeMenu);

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    filterProjects(button.getAttribute("data-filter"));
  });
});
