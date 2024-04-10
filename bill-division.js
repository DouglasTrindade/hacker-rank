const billDivision = (bill, k, b) => {
  let sum = 0;
  let finalValue = 0;

  bill.forEach((price) => (sum += price));

  sum = sum - bill[k];
  finalValue = sum / 2;

  if (finalValue != b) console.log(b - finalValue);
  else console.log("Bon Appetit");
};

billDivision([4, 1, 3, 10, 2, 9, 12], 6, 288);
