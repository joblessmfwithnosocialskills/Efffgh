// Customize these links before publishing.
const SITE_CONFIG = {
  discord: "", // Example: "https://discord.gg/your-invite"
  github: "",  // Example: "https://github.com/your-name"
  email: "hello@example.com"
};

const menu = document.getElementById("mobileMenu");
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}
function openMenu() {
  menu.classList.add("open");
  menu.setAttribute("aria-hidden", "false");
  menuBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}
function hideMenu() {
  menu.classList.remove("open");
  menu.setAttribute("aria-hidden", "true");
  menuBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}
menuBtn.addEventListener("click", openMenu);
closeMenu.addEventListener("click", hideMenu);
menu.addEventListener("click", event => { if (event.target === menu) hideMenu(); });
menu.querySelectorAll("a").forEach(link => link.addEventListener("click", hideMenu));
document.addEventListener("keydown", event => { if (event.key === "Escape") hideMenu(); });

document.querySelectorAll("[data-message]").forEach(button => {
  button.addEventListener("click", () => showToast(button.dataset.message));
});
document.getElementById("privateBtn").addEventListener("click", () => showToast("Private area is not configured yet."));
document.getElementById("privateLink").addEventListener("click", event => {
  event.preventDefault(); showToast("Private area is not configured yet.");
});
document.getElementById("menuPrivate").addEventListener("click", event => {
  event.preventDefault(); hideMenu(); showToast("Private area is not configured yet.");
});

function setExternalLink(id, url, fallback) {
  const element = document.getElementById(id);
  if (!element) return;
  if (url) { element.href = url; element.target = "_blank"; element.rel = "noopener noreferrer"; }
  else element.addEventListener("click", event => {
    if (element.getAttribute("href") === "#") event.preventDefault();
    showToast(fallback);
  });
}
setExternalLink("discord", SITE_CONFIG.discord, "Add your Discord invite URL in script.js.");
setExternalLink("github", SITE_CONFIG.github, "Add your GitHub profile URL in script.js.");
document.getElementById("emailLink").href = `mailto:${SITE_CONFIG.email}`;
document.getElementById("contactLink").href = `mailto:${SITE_CONFIG.email}`;
document.getElementById("termsLink").addEventListener("click", event => {
  event.preventDefault(); showToast("Add your terms and conditions before launching.");
});
