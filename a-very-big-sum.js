const aVeryBigSum = (arr) => {
  let sum = BigInt(0);

  for (let i = 0; i < arr.length; i++) {
    sum += BigInt(arr[i]);
  }

  return sum;
};

console.log(aVeryBigSum([223, 333, 102203300, 333, 222222222]));
