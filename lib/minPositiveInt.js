module.exports = arrayOfPositiveInts => {
  //function min(arrayOfPositiveInts) {
  if (!arrayOfPositiveInts || arrayOfPositiveInts === []) {
    return undefined;
  }

  // convert to a set to 'flatten' duplicate values
  const setOfPositiveInts = new Set(
    arrayOfPositiveInts.sort((a, b) => {
      return a - b;
    })
  );

  const setIterator = Array.from(setOfPositiveInts);
  for (let i = 0; i < setIterator.length; i += 1) {
    // check if the natural successor exists; if not, we have found our min
    if (parseInt(setIterator[i]) !== parseInt(setIterator[i + 1]) - 1) {
      //console.log("min found: ", setIterator[i] + 1);
      // check if number is negative or 0; if it is, return 1
      if (parseInt(setIterator[i]) + 1 <= 0) return 1;
      return setIterator[i] + 1;
    }
  }
  // return -1;
};

//min([99, 103, 104, 109, 110]);
