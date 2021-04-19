//input - no user input, the program will get the date from the computer
//processing - determine whether a day is a weekday, weekend or holiday
//output - display "sleep in" or "get up" depending on the day
function alarm() {
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    let message;
    if (month == 0 && dayOfMonth == 1 || month == 6 && dayOfMonth == 4 || month == 11 && dayOfMonth == 25) {
        message = "Sleep in.";
    } else if (dayOfWeek == 0 || dayOfWeek == 6) {
        message = "Sleep in.";
    } else {
        message = "Get up!";
    }
    document.getElementById('output').innerHTML = message;
}