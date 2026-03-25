// Scroll Button
const btn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
};

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Typing Effect
const roles = ["Developer", "Designer", "Freelancer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = roles[i];
  document.getElementById("typing").textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) j++;
  else if (isDeleting && j > 0) j--;
  else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Reveal Animation
const elements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (window.scrollY > el.offsetTop - 300) {
      el.classList.add("show");
    }
  });
});

// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true }
  }
});

// GitHub Projects
fetch("https://api.github.com/users/ydvankit07/repos")
  .then(res => res.json())
  .then(data => {
    let container = document.getElementById("github-projects");

    data.slice(0, 6).forEach(repo => {
      container.innerHTML += `
        <div class="project-card">
          <img src="https://via.placeholder.com/300">
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description"}</p>
          <a href="${repo.html_url}" target="_blank">Code</a>
        </div>
      `;
    });
  });

// Chatbot
function toggleChat() {
  let box = document.getElementById("chatbox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}