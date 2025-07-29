const words = ["Full Stack Developer", "Designer", "Dreamer"];
let i = 0, j = 0, current = '', isDeleting = false;

function type() {
  current = words[i];
  document.getElementById("typingText").textContent = current.substring(0, j);
  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

/*scrol button */
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
