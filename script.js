// Create falling hearts background
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = ['❤️', '💕', '💖', '💗', '💓', '💘'][Math.floor(Math.random() * 6)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    document.getElementById('hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Start heart animation
setInterval(createHeart, 300);

// Button interactions
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

let noClickCount = 0;
const noMessages = [
    "Are you sure? 🥺",
    "Please reconsider! 💔",
    "My heart is breaking... 😢",
    "I'll ask again... 🙏",
    "Pretty please? 🌹",
    "One more chance? 💕"
];

yesBtn.addEventListener('click', function() {
    response.innerHTML = "You've made me the happiest person alive! 💖🎉💕";
    response.classList.add('show');
    createCelebration();

    // Make yes button bigger and hide no button
    yesBtn.style.transform = 'scale(1.3)';
    noBtn.style.display = 'none';

    // Extra hearts burst
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 50);
    }
});

noBtn.addEventListener('click', function() {
    noClickCount++;

    if (noClickCount < noMessages.length) {
        response.innerHTML = noMessages[noClickCount - 1];
        response.classList.add('show');

        // Make yes button grow and no button shrink
        const currentYesScale = 1 + (noClickCount * 0.15);
        const currentNoScale = 1 - (noClickCount * 0.1);

        yesBtn.style.transform = `scale(${currentYesScale})`;
        noBtn.style.transform = `scale(${Math.max(0.5, currentNoScale)})`;
        noBtn.style.opacity = Math.max(0.3, 1 - noClickCount * 0.15);
    } else {
        // After many clicks, hide the no button
        noBtn.style.display = 'none';
        response.innerHTML = "There's only one answer now... 💘";
    }
});

// Move no button when hovering (playful effect)
noBtn.addEventListener('mouseover', function() {
    if (noClickCount > 1 && Math.random() > 0.5) {
        const maxX = window.innerWidth - noBtn.offsetWidth - 100;
        const maxY = window.innerHeight - noBtn.offsetHeight - 100;

        noBtn.style.position = 'fixed';
        noBtn.style.left = Math.random() * maxX + 'px';
        noBtn.style.top = Math.random() * maxY + 'px';
    }
});

// Celebration confetti
function createCelebration() {
    const colors = ['#ff6b6b', '#ff8e8e', '#ffb4b4', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6b9d'];

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}
