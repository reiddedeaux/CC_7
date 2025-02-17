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

// Task 3 Customer Loyalty Discount
const calculateLoyaltyDiscount = (amount, years)=> {
    let discountRate;
    if (years >= 5) discountRate =.15;
    else if (years >= 3);
    else discountRate = 0.05;
    const disountedPrice = amount *(1 - discountRate);
    console.log(`Discounted Price; $${disountedPrice.toFixed(2)}`);
}; // Created an arrow function that applies a discount and logs it into the console
calculateLoyaltyDiscount(100, 6); // Discounted Price: $85.00
calculateLoyaltyDiscount(200, 2); //Discounted PRice: $190.00 

// Task 4 Product Shipping Cost Calculation
const calculateShippingCost = (weight, location, expedited = false)=> {
    let cost = 0;
    if (location === `USA`){
        cost = 5 +(0.5 * weight);
    } else if (location === `Canada`){
        cost = 10 + (0.7 * weight);
    }
    if (expedited) cost += 10;
    console.log(`Shipping Cost: $${cost.toFixed(2)}`)
}; // Created a function to calculate shpping fees for USA and Canada and logging it into the console

calculateShippingCost(10, `USA`, true); // Shipping Cost: $20.00
calculateShippingCost(5, `Canada`, false); // Shipping Cost: $13.50

