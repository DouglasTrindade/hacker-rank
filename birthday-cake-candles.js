const birthdayCakeCandles = (candles) => {
  let maxHeight = 0;
  let count = 0;

  candles.sort((a, b) => b - a);
  maxHeight = candles[0];

  candles.forEach((candle) => {
    if (candle === maxHeight) {
      count++;
    }
  });

  return count;
};

console.log(birthdayCakeCandles([3, 2, 1, 3]));
