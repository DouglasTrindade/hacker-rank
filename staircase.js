const staircase = (n) => {
  let symble = "#";
  let inputLine = "";
  let inputPosition = n - 1;

  for (let lineIndex = 0; lineIndex < n; lineIndex++) {
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      if (columnIndex < inputPosition) {
        inputLine += " ";
      } else {
        inputLine += symble;
      }
    }
    console.log(inputLine);
    inputLine = "";
    inputPosition--;
  }
};

staircase(8);
