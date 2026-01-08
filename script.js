const petals = ["🌹", "🌸", "❤️"];

function createPetal() {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 4 + Math.random() * 6 + "s";
    petal.style.opacity = Math.random();

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 500);
