const year = document.querySelector("#current-year");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

document.querySelectorAll('a[href*="instagram.com/itschicbr"]').forEach((link) => {
  link.addEventListener("click", () => {
    console.info("Its Chic CTA clicked:", link.textContent.trim());
  });
});
