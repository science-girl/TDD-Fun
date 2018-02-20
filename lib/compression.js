module.exports = stringToCompress => {
  if (!stringToCompress) return "requires a string";

  // iterate through string and for each character count until a different character
  // is encountered
  let arrayToCompress = stringToCompress.split("");
  let currentIndex = 0;
  let compressedString = "";
  let lastIndex = 0;

  while (arrayToCompress.length > currentIndex) {
    // get first element of array and find first index where that element is not equal
    // that index will be the number we write to the string
    lastIndex = arrayToCompress.lastIndexOf(arrayToCompress[currentIndex]) + 1;
    compressedString = compressedString.concat(
      arrayToCompress[currentIndex],
      (lastIndex - currentIndex).toString()
    );
    // update currentIndex to lastIndex and reset lastIndex
    currentIndex = lastIndex;
    console.log(currentIndex);
    lastIndex = 0;
  }

  return compressedString;
};
