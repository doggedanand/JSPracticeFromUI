function countDownTimer() {

    // Set the initial countdown time in minutes
    const startMinutes = document.getElementById('minute').value;
    let time = startMinutes * 60;

    // Get the element where the countdown will be displayed
    const countDownEl = document.getElementById('countDown');

    // Function to update the countdown
    function updateCountDown() {
        // Check if the countdown has reached zero
        if (time <= 0) {
            clearInterval(intervalId); // Clear the interval
            countDownEl.innerHTML = 'Time\'s up!'; // Display a message
            return;
        }

        // Calculate the remaining minutes
        const minute = Math.floor(time / 60);

        // Calculate the remaining seconds
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Update the countdown display
        countDownEl.innerHTML = `${minute}:${seconds}`;

        // Decrement the time by 1 second
        time--;
    }

    // Set an interval to update the countdown every second
    const intervalId = setInterval(updateCountDown, 1000);

}