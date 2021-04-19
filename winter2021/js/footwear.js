function footwear() {
    //INPUT - user selects weather using a dropdown menu
    let shoes;
    let weather = document.getElementById('weather-select').value;
    //PROCESSING - program selects the appropriate footwear for the weather using switch
    switch(weather) {
        case "hot":
            shoes = "sandals";
            break;
        case "rain":
            shoes = "galoshes";
            break;
        case "snow":
            shoes = "boots";
            break;
        case "unknown":
            shoes = "shoes";
            break;
    }
    //OUTPUT - displays the footwear for the weather
    document.getElementById('output').innerHTML = `${shoes}`;
}