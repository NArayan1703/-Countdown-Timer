let countdownInterval;

function startTimer() {
    const durationInput = document.getElementById('duration');
    const durationInSeconds = parseInt(durationInput.value, 10);

    if (isNaN(durationInSeconds) || durationInSeconds <= 0) {
        alert('Please enter a valid positive number for the duration.');
        return;
    }

    let remainingTime = durationInSeconds;

    countdownInterval = setInterval(() => {
        displayTime(remainingTime);

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            alert('Time is up!');
            document.getElementById('timer').textContent = '';
            durationInput.value = '';
        }

        remainingTime--;
    }, 1000);
}

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    document.getElementById('timer').textContent = `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
}
