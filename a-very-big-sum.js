const aVeryBigSum = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

console.log(aVeryBigSum([223, 333, 102203300, 333, 222222222]));
