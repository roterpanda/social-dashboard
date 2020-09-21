const toggle = document.getElementById("dark-mode-switch");
const mainContainer = document.getElementById("mainContainer");

toggle.addEventListener("input", (e) => {
  mainContainer.classList.contains("dark")
    ? mainContainer.classList.remove("dark")
    : mainContainer.classList.add("dark");
});
