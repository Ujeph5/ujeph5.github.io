//input - user puts in subtotal amount
//processing - if subtotal amout > $50 on Tuesday or Wednesday subtract 10% from subtotal
//processing cont. - in all cases, final step is to add 6% sales tax to subtotal
//output - display the total cost
function salesDiscount() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let dayOfWeek = new Date().getDay();
    if (subtotal > 50 && (dayOfWeek == 2 || dayOfWeek == 3)) {
        subtotal = subtotal - subtotal * .1;
    }
    let totalAfterTax = subtotal + subtotal * .06;
    totalAfterTax = totalAfterTax.toFixed(2);
    document.getElementById('output').innerHTML = `$${totalAfterTax}`;
}