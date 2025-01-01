// Countdown Timer
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    let [hours, minutes, seconds] = countdownElement.textContent.split(':').map(Number);

    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        }
    }

    countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        alert('Offer has expired!');
    }
}

const timerInterval = setInterval(updateCountdown, 1000);

// User Agreement Handling
const checkbox = document.getElementById('userAgreement');
const buyButton = document.getElementById('premiumBuyButton');
const errorMessage = document.getElementById('agreementError');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        buyButton.classList.remove('disabled');
        errorMessage.style.display = 'none';
    } else {
        buyButton.classList.add('disabled');
    }
});

buyButton.addEventListener('click', function (e) {
    if (!checkbox.checked) {
        e.preventDefault();
        errorMessage.style.display = 'block';
        return;
    }
    errorMessage.style.display = 'none';
    alert('Proceeding to checkout...');
});
