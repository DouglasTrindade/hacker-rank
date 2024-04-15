const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let countApples = 0;
  let countOranges = 0;

  apples.forEach((apple) => {
    if (apple + a >= s && apple + a <= t) {
      countApples++;
    }
  });

  oranges.forEach((orange) => {
    if (orange + b <= t && orange + b >= s) {
      countOranges++;
    }
  });

  console.log(countApples);
  console.log(countOranges);
};

countApplesAndOranges(7, 11, 5, 15, [3, 2, -2], [2, 1, 5, -6]);
