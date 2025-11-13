// load-components.js
document.addEventListener("DOMContentLoaded", function () {
  // Load Header
  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // Reattach event listener for mobile menu after header loads
      const menuToggle = document.getElementById("mobile-menu-toggle");
      const mobileMenu = document.getElementById("mobile-menu");
      if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }
    });

  // Load Footer
  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});
