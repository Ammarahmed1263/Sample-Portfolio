const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-wrapper ul");
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

const filterProjects = (filter) => {
    projects.forEach((project) => {
      project.classList.remove("hidden");
      if (
        filter !== "all" &&
        !project.getAttribute("data-category").includes(filter)
      ) {
        project.classList.add("hidden");
      }
    })
}

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("show");
  console.log('nav links', navLinks.classList);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    filterProjects(button.getAttribute("data-filter"));
  });
});
