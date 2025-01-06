function calculateBonus(salary, paygrade, rating) {
  let additionalBonus = null;
  let bonus = null;

  // paygrade is less than 3 -> bonus = salary * .2
  if (paygrade < 3) {
    bonus = salary * 0.2;
  }
  // paygrade greater than 2 / less than 7
  else if (paygrade >= 3 && paygrade <= 7) {
    // if paygrade between 3 and 6 inclusive
    if (paygrade >= 3 && paygrade <= 6) {
      // rating is 1
      if (rating === 1) {
        additionalBonus = salary * 0.1;
      }
      // rating is 2
    }
     if (rating === 2) {
      additionalBonus = salary * 0.9;
    }
    //  paygrade is 3 or 4
    if (paygrade === 3 || paygrade === 4) {
      bonus = salary * 0.5 + additionalBonus;
    }
    //  paygrade is between 5 and 7 inclusive
    else {
      bonus = salary * 0.4 + additionalBonus;
    }
  } else {
    bonus = salary * 0.1;
  }
  return bonus;
}

// TESTS - Run these in your browser to see if your solution works.
// calculateBonus(100, 4, 1) // 60
// calculateBonus(100, 4, 2); // 140
// calculateBonus(100, 8, 2); // 10
// calculateBonus(100, 1); // 20
// calculateBonus(100, 6, 2); // 130

console.log(`Bonus for employee A is: ${ calculateBonus( 100, 4, 1)}`);
console.log("bonus 2",calculateBonus(100, 4, 2));
console.log("bonus 3",calculateBonus(100, 8, 2));
console.log("bonus 4",calculateBonus(100, 1));
console.log("bonus 5",calculateBonus(100, 6, 2));
