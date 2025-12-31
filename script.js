const correctKey = "05-03-2025";

function unlock() {
  const input = document.getElementById("keyInput").value.trim();
  const error = document.getElementById("error");

  if (input === correctKey) {
    document.getElementById("lock").style.display = "none";
    document.getElementById("letterView").style.display = "flex";
    spawnHearts();
  } else {
    error.textContent = "Not this one 💜";
  }
}

function reset() {
  document.getElementById("letterView").style.display = "none";
  document.getElementById("lock").style.display = "flex";
  document.getElementById("keyInput").value = "";
}

function spawnHearts() {
  const container = document.getElementById("hearts");

  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDelay = Math.random() * 2 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}
