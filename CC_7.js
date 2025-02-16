// Task 1 Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) -discount ;
    console.log(`Total invoice: $${total.toFixed(2)}`) ;
}; // Function that calculates the final invoice amount and logs it into the console

calculateInvoice(100, 0.08, 5); // Total Invoice: $103.00
calculateInvoice(500, 0.1, 20); // Totla Invoice: $530.00