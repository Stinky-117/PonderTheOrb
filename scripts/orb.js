document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById("switchImage");
    const errorMessage = document.getElementById("errorMessage");

    const flickerImages = ["images/oph.jpg", "images/opf.jpg"];
    let flickerCount = 6;
    let orbState = false;
    let flickerInterval;

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.color = "red";
        errorMessage.style.visibility = "visible";

        setTimeout(() => {
            errorMessage.style.visibility = "hidden";
        }, 2000);
    }

    function startOrbAnimation() {
        if (orbState) {
            showError("The orb is already being pondered!");
            return;
        }
        orbState = true;

        let count = 0;
        flickerInterval = setInterval(() => {
            img.src = flickerImages[count % 2];
            count++;

            if (count >= flickerCount) {
                clearInterval(flickerInterval);
                img.src = "images/opf.jpg"; // Final state after flickering
            }
        }, 200);
    }

    // 🛠️ Automatically start animation on page load
    startOrbAnimation();
});
