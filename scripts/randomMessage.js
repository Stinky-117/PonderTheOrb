document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "Verily, it shall come to pass.",
        "The fates nod in agreement.",
        "Beyond the veil, signs point to aye.",
        "The stars align in thy favor.",
        "A most certain omen of fortune.",
        "The arcane forces sayeth: Indeed!",
        "Without a doubt, so it is decreed.",
        "The grand cosmos whispers 'yes'.",
        "By my staff, I foresee certainty.",
        "The runes declare it to be true.",
        "Hazy is the ether, ask once more.",
        "The mists obscure the answer, try again.",
        "The winds of fate shift, consult me anon.",
        "The scrying pool remains unclear.",
        "The hour is not right, inquire later.",
        "Concentration is needed, seek wisdom anew.",
        "Trust not in answers given in haste.",
        "I see signs both fair and foul.",
        "Nay, the fates turn against thee.",
        "The cosmos shrouds thy wish in darkness.",
        "Doomed is the path thou tread.",
        "Thine inquiry meets the void.",
        "The spirits answer 'Nay'.",
        "My crystal quakes—doubt lingers.",
        "Even the greatest seers see naught but denial.",
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
    }, 2000); // 3-second delay
});
