window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});
// Get the inputs from the DOM.
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 40000;
  document.getElementById("loan-years").value = 15;
  document.getElementById("loan-rate").value= 3.5;
 
update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValue = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValue));  

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

let amountToLoan = parseFloat(values.amount);
let interestRate = parseFloat((values.rate/100))/12;
let numberOfPayments = parseFloat(values.years)*12;

 let numerator = amountToLoan * interestRate;

 let denominator =  1 - (1 / Math.pow((1+interestRate),numberOfPayments));

 let monthlyPayment = (numerator/denominator).toFixed(2);
 
 return monthlyPayment.toString();

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = '$'+ 12.3333;
}
