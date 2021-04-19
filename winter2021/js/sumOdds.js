//input - user inputs an integer n
//processing - i = 1, sum = 0; while i <= n, sum += 1 (add and assign i to sum), then increment i by 2
//output - displays the sum of all odd integers between 1 and n
function sumOdds() {
    let n = parseInt(document.getElementById('integer').value);
    let i = 1;
    let sum = 0;
    while (i <= n) {
        sum += i
        i += 2;
    }
    document.getElementById('output').innerHTML = sum;
}