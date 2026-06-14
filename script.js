function toggleMusic() {
  const music = document.getElementById("bgmusic");

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

/* HEARTS */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
}

function heartBurst() {
  for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 70);
  }
}

/* MAIN */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("revealBtn");
  const card = document.getElementById("card");
  const text = document.getElementById("reasonText");

  const music = document.getElementById("bgmusic");

  /* autoplay attempt */
  music.play().catch(() => {
    console.log("Autoplay blocked");
  });

  btn.addEventListener("click", () => {
    const random = reasons[Math.floor(Math.random() * reasons.length)];

    text.innerText = "💖 " + random;

    card.classList.remove("hidden");
    card.classList.remove("pop");
    void card.offsetWidth; // restart animation
    card.classList.add("pop");

    heartBurst();
  });
});
