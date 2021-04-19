//input - user presses button
//processing - loop runs 12 times [for (i = 1; i < 13; i++)], and adds a new times table for each i [`5 * ${i} = ${product}`]
//output - displays times tables
function fiveTimes() {
    output = "";
    for (i = 1; i < 13; i++) {
        product = 5 * i;
        output += `5 x ${i} = ${product}<br>`;
    }
    document.getElementById('output').innerHTML = output;
}