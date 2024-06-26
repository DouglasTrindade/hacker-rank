const dayOfProgrammer = (year) => {
  if (year >= 1700 && year <= 2700) {
    //julian calender
    if (year >= 1700 && year <= 1917) {
      if (year % 4 === 0) {
        return `12.09.${year}`;
      } else {
        return `13.09.${year}`;
      }
    }

    //1918
    if (year === 1918) {
      return `26.09.${year}`;
    }

    // gregorian calender
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
      return `12.09.${year}`;
    } else {
      return `13.09.${year}`;
    }
  } else {
    return `Please, input a year between 1700 and 2700.`;
  }
};

console.log(dayOfProgrammer(2017));
