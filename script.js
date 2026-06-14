function playMusic() {
  const music = document.getElementById("bgmusic");
  music.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const jar = document.getElementById("jar");

  jar.addEventListener("click", () => {
    const randomReason =
      reasons[Math.floor(Math.random() * reasons.length)];

    alert("💖 " + randomReason);
  });
});
