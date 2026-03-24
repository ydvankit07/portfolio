// Scroll Button
const btn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
};

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Typing Effect
const text = "Ankit 👨‍💻";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

type();

// Reveal Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (window.scrollY > sec.offsetTop - 300) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});