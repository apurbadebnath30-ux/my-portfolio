function createFirework() {
    const firework = document.createElement("div");
    firework.className = "firework";

    firework.style.left = Math.random() * 80 + 10 + "%";
    firework.style.top = Math.random() * 50 + 15 + "%";

    document.getElementById("intro").appendChild(firework);
function createFirework() {
    const firework = document.createElement("div");
    firework.className = "firework";

    firework.style.left = Math.random() * 80 + 10 + "%";
    firework.style.top = Math.random() * 50 + 15 + "%";

    document.getElementById("intro").appendChild(firework);

    setTimeout(function() {
        firework.remove();
    }, 1500);
}

setInterval(createFirework, 500);
    setTimeout(function() {
        firework.remove();
    }, 1500);
}

setInterval(createFirework, 500); setTimeout(function() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
}, 3000);
function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";

    const flowers = ["🌸", "🌺", "🌷", "🌼"];
    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "%";
    flower.style.animationDuration = 3 + Math.random() * 3 + "s";

    document.getElementById("intro").appendChild(flower);

    setTimeout(function() {
        flower.remove();
    }, 6000);
}

setTimeout(function() {
    setInterval(createFlower, 250);
}, 2500);
