const formingMagicSquare = (s) => {
  let magicSquares = [
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
  ];
  let maxValue = Number.MAX_VALUE;

  for (let i = 0; i < magicSquares.length; i++) {
    let minValue = 0;
    for (let line = 0; line < s.length; line++) {
      for (let column = 0; column < s.length; column++) {
        minValue += Math.abs(s[line][column] - magicSquares[i][line][column]);
      }
    }
    maxValue = Math.min(maxValue, minValue);
  }
  return maxValue;
};
console.log(
  formingMagicSquare([
    [4, 8, 2],
    [4, 5, 7],
    [6, 1, 6],
  ])
);
