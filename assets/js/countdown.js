// Countdown script

const countDownDate = new Date("2025-08-25T00:00:00").getTime();

// Function that updates the timer
const updateCountdown = () => {
    const now = new Date().getTime();
    const remainingTime = countDownDate - now;

    // If time has run out
    if (remainingTime < 0) {
        document.querySelector(".countdown").innerHTML = "Welcome to the IDM Showcase!";
        return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
};

updateCountdown(); 
setInterval(updateCountdown, 1000); // Update the timer every second