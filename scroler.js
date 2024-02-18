document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".sub-menu-nav a");

  // Function to highlight the active navigation link
  function highlightNavLink() {
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
          const top = section.offsetTop - 40; // Adjust the offset as needed
          const bottom = top + section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
              navLinks[index].classList.add("active");
          } else {
              navLinks[index].classList.remove("active");
          }
      });
  }

  // Event listener for scrolling
  window.addEventListener("scroll", highlightNavLink);
});