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

setInterval(createFirework, 500); setTimeout(function() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
}, 3000);
