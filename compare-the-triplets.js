const compareTriplets = (a, b) => {
  let alicePoints = 0;
  let bobPoints = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alicePoints++;
    } else if (a[i] < b[i]) {
      bobPoints++;
    }
  }
  return [alicePoints, bobPoints];
};

console.log(compareTriplets([17, 28, 30, 4], [99, 16, 8, 10]));
