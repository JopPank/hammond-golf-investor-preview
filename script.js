const menuButton = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuButton && primaryNav) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    primaryNav.classList.toggle("is-open", !isExpanded);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      menuButton.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("is-open");
      menuButton.focus();
    }
  });
}

const bookingDialog = document.querySelector("#booking-dialog");

if (
  document.body.hasAttribute("data-show-booking-prompt")
  && bookingDialog instanceof HTMLDialogElement
  && !bookingDialog.open
) {
  bookingDialog.showModal();

  bookingDialog.querySelector("[data-close-booking]")?.addEventListener("click", () => {
    bookingDialog.close();
  });
}

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

document.addEventListener("click", (event) => {
  const link = event.target instanceof Element
    ? event.target.closest("a[data-track]")
    : null;

  if (link && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: "website_cta",
      cta_name: link.getAttribute("data-track")
    });
  }
});
