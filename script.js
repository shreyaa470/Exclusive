// Example: alert when a link is clicked (you can customize this)
document.querySelectorAll(".links a").forEach(link => {
  link.addEventListener("click", () => {
    console.log(`Opening ${link.href}`);
  });
});

const qrBtn = document.getElementById("qr-btn");
const modal = document.getElementById("qr-modal");
const closeBtn = document.querySelector(".close");
const doneBtn = document.getElementById("payment-done-btn");
const afterPayment = document.getElementById("after-payment");

let countdownInterval;

qrBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";

  // Start 5-minute countdown
  let timeLeft = 5; // seconds
  doneBtn.disabled = true;

  countdownInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      doneBtn.disabled = false;
      doneBtn.textContent = "✅ I've Paid";
       // Add redirect on click after countdown completes
    doneBtn.addEventListener("click", () => {
      window.location.href = "req.html"; // Replace with your target page
    });
    } else {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      doneBtn.textContent = `⏳ Do Payment ${minutes}:${seconds
        .toString()
        .padStart(2, "0")}`;
      timeLeft--;
    }
  }, 1000);
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  clearInterval(countdownInterval); // stop timer if modal closed
  doneBtn.textContent = "⏳ Do Payment In 5:00";
});

doneBtn.addEventListener("click", () => {
  if (doneBtn.disabled) return;

  modal.style.display = "none";
  afterPayment.classList.remove("hidden");
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});


//Request Access
