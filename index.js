
// functions

// es5
// function CalculatePrice(expenses1, expenses2, budget, marketPlace){
  // console.log(expenses1, "as expenses 1")
  // console.log(expenses2, "as expenses 2")
  // console.log(budget, "as budget")
  //  let totalExpense = expenses1 + expenses2;
  //  let validBudget = budget - totalExpense;
  //  console.log(validBudget, ` naira is your budget extimaed balance at ${marketPlace}`)

  //  console.log(validBudget + "" + "naira is your budget extimaed balance at " + "" + marketPlace)

  //  let totalExpense = 60 + 50;
  //  let validBudget = 100 - totalExpense;
  //  console.log(validBudget, ` naira is your budget extimaed balance at ${marketPlace}`)
// }

// CalculatePrice(20, 50, 100, "Ikeja Market");
// CalculatePrice(80, 90, 150, "Benue Market");
// CalculatePrice(80, 10, 90, "Ilepo Market");
// CalculatePrice(60, 15, 2000, "Shoprite");

// if and else
// function validate(name, age, isNigeria){
//   if(isNigeria == true){
//     console.log(`Hello ${name}, You are part of us`)
//   }
//    else {
//     console.log(`Hello ${name}, An Outcast`)
//   }
// }

/*validate("Richard", 15, false)
validate("Collins", 30, true)
validate("Babyface", 17, "false")
validate("Boluwatife", 18, "true")*/

// Build a function that checks if the current expenses is over the budget, Then print out not buying to the console..Else allow buying ..




function currentExpenses(commodityPrice,budget1, budget2){
  if (budget1 != commodityPrice) {
    console.log(`not buying`)
  }
  else {
        console.log(`allow buying`)
}
  

  
}

currentExpenses(100, 85, 100)



