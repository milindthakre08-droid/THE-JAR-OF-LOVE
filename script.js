function playMusic() {
  document.getElementById("bgmusic").play();
}

/* HEART EXPLOSION */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}

/* AUTO HEART BURST */
function heartBurst() {
  for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 80);
  }
}

/* MAIN */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("revealBtn");
  const card = document.getElementById("card");
  const text = document.getElementById("reasonText");

  /* Try autoplay music */
  const music = document.getElementById("bgmusic");
  music.play().catch(() => {
    console.log("Autoplay blocked, user must click button");
  });

  btn.addEventListener("click", () => {
    const random = reasons[Math.floor(Math.random() * reasons.length)];

    text.innerText = "💖 " + random;
    card.classList.remove("hidden");

    heartBurst();
  });
});
