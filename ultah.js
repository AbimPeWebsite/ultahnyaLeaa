function showSurprise() {
    // Play confetti animation
    startConfetti();
    // Change the message
    const message = document.getElementById("message");
    message.textContent = "semoga sehat selalu deng kalo ba bekeng keputusan tanya dulu pa anggota kelas aa jangan bekeng keputusan sendiri ❤️";
    // Hide the button
    document.getElementById("surpriseButton").style.display = "none";
}

function startConfetti() {
    const confettiContainer = document.getElementById("confettiContainer");
    const confettiCount = 100;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() * 2 + "s";
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000); // Remove after 5 seconds
    }
}

function getRandomColor() {
    const colors = ["#ff9a9e", "#fad0c4", "#fbc687", "#ff6f61", "#ffe9a7"];
    return colors[Math.floor(Math.random() * colors.length)];
}
