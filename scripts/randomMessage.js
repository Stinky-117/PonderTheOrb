document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "The orb says... try again later.",
        "A great destiny awaits you... or maybe just a sandwich.",
        "Your question confuses the orb, ask again.",
        "The answer lies within... but the orb won't tell you.",
        "Dark forces are at work... or maybe it's just gas.",
        "Beware of unexpected visitors, especially from the IRS.",
        "You will find great fortune... in the next life.",
        "The orb is tired. Come back after a nap.",
        "Something big is coming. Or not. Who knows?",
        "The orb is laughing at you, not with you."
    ];

    function displayTypingEffect(text, element, delay = 50) {
        let index = 0;
        element.textContent = ""; // Clear previous text
        
        function typeCharacter() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                setTimeout(typeCharacter, delay); // Continue typing
            }
        }
        
        typeCharacter();
    }

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        const randomMessage = messages[randomIndex];
        const messageElement = document.getElementById("transMessage");

        if (messageElement) {
            displayTypingEffect(randomMessage, messageElement);
        }
    }, 3000); // 3-second delay
});
