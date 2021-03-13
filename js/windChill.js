function doInputOutput(){
    //input - users inputs the temperature and windspeed
    let temperature = parseFloat(document.getElementById('temperature').value);
    let windspeed = parseFloat(document.getElementById('windspeed').value);
    let message;
    if (temperature <= 50 && windspeed >= 3) {
        //let windChill = windChill(temperature, windspeed);
        message = `${windChill(temperature, windspeed)} degrees`;
    } else {
        message = "Wind chill is not calculated for temperatures above 50 degrees Fahrenheit nor for wind speeds below 3 miles per hour."
    }
    
    //output - display the calculated windchill
    document.getElementById('output').innerHTML = message;
}

function windChill(tempF, speed) {
    /*processing - using temperature and windspeed, calculate windChill with the formula:
    f = 35.74 + 0.6215 t - 35.75 s^0.16 + 0.4275 t s^0.16*/
    return Math.round(35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16));
}