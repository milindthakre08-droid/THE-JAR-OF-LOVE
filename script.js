function playMusic() {
  document.getElementById("bgmusic").play();
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("revealBtn");
  const card = document.getElementById("card");
  const text = document.getElementById("reasonText");

  btn.addEventListener("click", () => {
    const random = reasons[Math.floor(Math.random() * reasons.length)];

    text.innerText = "💖 " + random;
    card.classList.remove("hidden");
  });
});
