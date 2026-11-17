// Smoothly move to a page section
function goTo(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Gift interaction
function openGift() {
  document.querySelector(".gift").textContent = "💝";
  document.getElementById("giftMessage").textContent =
    "A little love, just for you. You deserve the sweetest things. ❤️";
  document.getElementById("giftNext").classList.remove("hidden");
}

// Background music: browsers require a user click before audio can play
async function toggleMusic() {
  const music = document.getElementById("backgroundMusic");
  const button = document.getElementById("musicButton");

  if (music.paused) {
    try {
      await music.play();
      button.textContent = "♫ Pause music";
    } catch (error) {
      button.textContent = "Add music.mp3";
      alert("Put a music file named music.mp3 in this folder, then try again.");
    }
  } else {
    music.pause();
    button.textContent = "♫ Play music";
  }
}

// Open envelope and reveal the letter animation
function openLetter() {
  const envelope = document.getElementById("envelopeButton");
  envelope.classList.add("open");
  document.getElementById("envelopeHint").textContent =
    "A little note, written just for you…";
  document.getElementById("readLetterButton").classList.remove("hidden");
  document.getElementById("paper").classList.add("reveal");
}

// Final answer and floating hearts
function answerYes() {
  document.getElementById("answerMessage").textContent =
    "YAY! You just made my whole day. I adore you! 💖";
  launchHearts();
}

function moveNoButton() {
  const button = document.getElementById("noButton");
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 60 - 30;
  button.style.transform = `translate(${x}px, ${y}px)`;
}

function launchHearts() {
  const symbols = ["💗", "💕", "💖", "♡"];

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("span");
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      top: 100vh;
      font-size: ${18 + Math.random() * 22}px;
      z-index: 100;
      pointer-events: none;
      transition: transform 3s linear, opacity 3s;
    `;
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform =
        `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 3100);
  }
}
