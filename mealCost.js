function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let mealTip = meal_cost * (tip_percent / 100);
    let mealTax = meal_cost * (tax_percent / 100);
    
    let totalCost = meal_cost + mealTip + mealTax;
    totalCost = totalCost.toFixed(0);
    
    console.log(totalCost);
}
