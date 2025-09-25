const menuToggle = document.querySelector(".menu-toggle");
const navItems = document.querySelector(".nav-wrapper ul");
const navLinks = document.querySelectorAll(".nav-wrapper ul li a");
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");
const overlay = document.querySelector(".overlay");
const contactForm = document.getElementById("contact-form");

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

menuToggle.addEventListener("click", openMenu);

overlay.addEventListener("click", closeMenu);

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    filterProjects(button.getAttribute("data-filter"));
  });
});

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    phone: contactForm.phone.value,
    service: contactForm.service.value,
    timeline: contactForm.timeline.value,
    message: contactForm.message.value,
  };

  try {
    const response = await fetch("https://formspree.io/f/mnngngyp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  } catch (error) {
    console.error("Error sending form:", error);
    alert("Failed to send message. Please try again later.");
  }
});
