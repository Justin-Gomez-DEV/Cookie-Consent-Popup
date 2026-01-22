const closeButton = document.querySelector(".cookie-banner__close-button");
const acceptButton = document.querySelector(".cookie-banner__accept-button");
const isCookieAccepted = localStorage.getItem("cookieAccepted");

document.addEventListener("DOMContentLoaded", () => {
  if (isCookieAccepted === "false" || isCookieAccepted === "true") {
    document
      .querySelector(".cookie-banner")
      .classList.add("cookie-banner--closed");
  }
  closeButton.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", "false");
    document
      .querySelector(".cookie-banner")
      .classList.add("cookie-banner--closed");
  });

  acceptButton.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", "true");
    document
      .querySelector(".cookie-banner")
      .classList.add("cookie-banner--closed");
  });
});