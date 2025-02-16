// Task 1 Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) -discount ;
    console.log(`Total invoice: $${total.toFixed(2)}`) ;
}; // Function that calculates the final invoice amount and logs it into the console

calculateInvoice(100, 0.08, 5); // Total Invoice: $103.00
calculateInvoice(500, 0.1, 20); // Totla Invoice: $530.00

// Task 2 Employee Hourly Wage Calculation
const calculateHourlyWage = function(salary, hoursPerWeek) {
    const hourlyWage = salary / (hoursPerWeek * 52);
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`)
}; // Function that calculates the hourly wage and logs it into the console
calculateHourlyWage(52000, 40); //Expected Output: $25.00
calculateHourlyWage(75000, 35); //Expected Output: $41.21

