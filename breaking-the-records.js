const breakingRecords = (scores) => {
  let max = scores[0];
  let min = scores[0];
  let countMax = 0;
  let countMin = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
      countMax++;
    }

    if (scores[i] < min) {
      min = scores[i];
      countMin++;
    }
  }

  return [countMax, countMin];
};

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
