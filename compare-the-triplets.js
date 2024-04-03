const compareTriplets = (a, b) => {
  let alicePoints = 0;
  let bobPoints = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alicePoints++;
    } else if (a[i] < b[i]) {
      bobPoints++;
    } else if (a[i] === b[i]) {
      return 0;
    }
  }
  return [alicePoints, bobPoints];
};

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
