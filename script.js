let step = 0;

const music = document.getElementById("bgMusic");
const questionEl = document.getElementById("question");
const textEl = document.getElementById("text");
const buttonEl = document.getElementById("mainButton");
const box = document.getElementById("mainBox");

const questions = [
    "Kritika, do you believe in cute surprises? 💫",
    "Do you like someone who thinks about you a little too much? 🥺",
    "Can I be the reason behind your smile every day? 😊",
    "Okay Kritika… one last question ❤️"
];

function nextQuestion() {
    // start music safely
    if (music.paused) {
       music.volume = 0.8;
       music.currentTime = 0;
       music.play();
}

    if (step < questions.length) {
        questionEl.innerText = questions[step];
        textEl.innerText = "";
        step++;
    } else {
        showFinalQuestion();
    }
}

function showFinalQuestion() {
    questionEl.innerText = "Kritika, will you be my Valentine? 💖";
    textEl.innerText = "";

    buttonEl.innerText = "YES 😍";
    buttonEl.onclick = showLovePopup;

    const noBtn = document.createElement("button");
    noBtn.innerText = "NO 🙈";
    noBtn.style.marginLeft = "10px";
    noBtn.onmouseover = () => {
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 80 + "%";
        noBtn.style.top = Math.random() * 80 + "%";
    };

    box.appendChild(noBtn);
}

function showLovePopup() {
    alert("I Love You ❤️");

    // Final love message screen
    box.innerHTML = `
        <h1>❤️ I Love You, Kritika ❤️</h1>
        <p style="margin-top:15px; font-size:16px; color:#555;">
            Thank you for being the most beautiful part of my life.<br>
            No matter where life takes us,<br>
            my heart will always choose you.
        </p>
        <p style="margin-top:20px; font-size:18px;">
            🌹 Forever Yours 🌹
        </p>
    `;
}

/* 💖 Floating hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 400);
