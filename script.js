const menuToggle = document.querySelector(".menu-toggle");
const navItems = document.querySelector(".nav-wrapper ul");
const navLinks = document.querySelectorAll(".nav-wrapper ul li a");
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");
const overlay = document.querySelector(".overlay");

const filterProjects = (filter) => {
  projects.forEach((project) => {
    project.classList.remove("hidden");
    if (
      filter !== "all" &&
      !project.getAttribute("data-category").includes(filter)
    ) {
      project.classList.add("hidden");
    }
  });
};

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  overlay.classList.toggle("active");
  navItems.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  navItems.classList.remove("show");
  overlay.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("nav links", navLinks, link);
    navItems.classList.remove("show");
    overlay.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    filterProjects(button.getAttribute("data-filter"));
  });
});
