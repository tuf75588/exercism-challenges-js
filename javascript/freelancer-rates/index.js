function daysInBudget(budget, ratePerHour) {
  let daysPassed = 0;
  let sum = 0;
  while (sum < budget) {
    sum += ratePerHour;

    daysPassed++;
  }
  console.log(daysPassed, sum);
}
const a = daysInBudget(20000, 89);
