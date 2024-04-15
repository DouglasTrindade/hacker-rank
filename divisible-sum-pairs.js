const divisibleSumPairs = (n, k, ar) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let pair = 0; pair < n; i++) {
      if (i != pair) {
        if ((ar[i] + ar[pair]) % k === 0) {
          sum++;
        }
      }
    }
  }

  return sum / 2;
};

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
