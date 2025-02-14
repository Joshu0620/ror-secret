onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

document.addEventListener("DOMContentLoaded", function () {
  const fireflyCount = 16;
  const heartCount = 16;
  const container = document.body;
  let elements = [];

  function createFirefly() {
    let firefly = document.createElement("div");
    firefly.className = "firefly";
    firefly.style.top = Math.random() * 100 + "%";
    firefly.style.left = Math.random() * 100 + "%";
    firefly.style.animationDelay = Math.random() * 5 + "s";
    firefly.style.setProperty("--random-x1", Math.random() * 2 - 1);
    firefly.style.setProperty("--random-y1", Math.random() * 2 - 1);
    firefly.style.setProperty("--random-x2", Math.random() * 2 - 1);
    firefly.style.setProperty("--random-y2", Math.random() * 2 - 1);
    firefly.style.setProperty("--random-x3", Math.random() * 2 - 1);
    firefly.style.setProperty("--random-y3", Math.random() * 2 - 1);
    firefly.style.setProperty("--random-x4", Math.random() * 2 - 1);
    firefly.style.setProperty("--random-y4", Math.random() * 2 - 1);
    container.appendChild(firefly);
    elements.push(firefly);
  }

  function createHeart() {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.top = Math.random() * 100 + "%";
    heart.style.left = Math.random() * 100 + "%";
    container.appendChild(heart);
    elements.push(heart);
  }

  for (let i = 0; i < fireflyCount; i++) createFirefly();
  for (let i = 0; i < heartCount; i++) createHeart();

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1;

      // Start flickering animation AFTER fading in
      if (el.classList.contains("heart")) {
        setTimeout(() => {
          el.style.animation = "flicker 3s infinite ease-in-out";
        }, 5000); // Start flickering 5s after appearing
      }
    }, index * 500); // Staggered fade-in
  });
});
