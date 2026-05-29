const button = document.getElementById("enterBtn");

const audio = document.getElementById("ambient");

button.addEventListener("click", () => {

    audio.volume = 0.3;

    audio.play();

    button.innerText = "DO NOT ENTER";

});

setInterval(() => {

    document.body.style.opacity =
        Math.random() > 0.98 ? "0.97" : "1";

}, 120);

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-8px) rotate(" +
            (Math.random() * 2 - 1)
            + "deg)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) rotate(0deg)";

    });

});

console.log("THE CURSE OF INHERITANCE");
console.log("DO NOT ENTER THE OTHER ROOMS.");