const simpleArraySum = (arr) => {
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(simpleArraySum([1, 2, 3, 4]));
