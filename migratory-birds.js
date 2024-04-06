const migratoryBirds = (arr) => {
  let counts = {};

  arr.forEach((count) => {
    counts[count] = (counts[count] || 0) + 1;
  });

  const maxValue = Math.max(...Object.values(counts));
  // console.log(Object.keys(counts));
  const num = Object.keys(counts).find((key) => {
    return counts[key] === maxValue;
  });

  return num;
};

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
