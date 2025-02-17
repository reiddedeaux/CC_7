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

//Task 5 Business Loan Interest Calculation
const calculateLoanInterest = (principal, rate, years) => {
    let interest = principal * rate * years ;
    console.log(`Total Interest: $${interest.toFixed(2)}`)
}
calculateLoanInterest(1000, 0.05, 3); // Total Interest: $150.00
calculateLoanInterest(5000, 0.07, 5); // Total Interest: $1750.00

// Task 6 Filtering High-Value Transactions
let transactions = [500, 1200, 3000, 800, 2200]; // declared an array with 5 values
function filterHighValueTransactions(transactions, filterFunction){
     const result = transactions.filter(filterFunction);
     console.log("High-Value Transactions:", result);
}; // Created a higher order function that filters transactions over $1000 and logs it into the console
filterHighValueTransactions(transactions, amount => amount > 1000); // High-Value Transactions: 1200, 3000, 2200

// Task 7 Budget Tracker
function createBudgetTracker(){
    let balance = 0;
    return function(expense) {
        balance -= expense ;
        console.log(`Current Balance: -$${Math.abs(balance)}`);
    }; // Created a function to add expenses and keep a running balance 
};
let budget = createBudgetTracker();
budget(300); // Current Balance: -$300
budget(200); // Current Balance: -$500

// Task 8 Business Growth Projection
function calculateGrowth(years, revenue){
    if (years >= 10) return `Projected Revenue: $${revenue.toFixed(2)}`;
    return calculateGrowth(years + 1, revenue *1.05);
};

console.log(calculateGrowth(8,1000));// Projected Revenue: $1102.50
console.log(calculateGrowth(5,5000));// Projected Revenue: $6381.41