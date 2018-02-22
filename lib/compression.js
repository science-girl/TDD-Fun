module.exports = compressString => {
  // function compress(compressString) {
  if (!compressString) {
    return undefined;
  }
  const compressStringArray = compressString.split("");
  //   const compressCounter = compressStringArray.length.toString();
  // want to filter over the array to check if the next letter is the same
  let counter = 0;
  let answer = "";
  let newLetterIndex = 0;
  for (let i = 0; i < compressStringArray.length + 1; i += 1) {
    if (compressStringArray[i] === compressStringArray[newLetterIndex]) {
      counter += 1;
    } else {
      answer = answer.concat(compressStringArray[newLetterIndex], counter);
      newLetterIndex = i;
      counter = 1;
    }
  }
  return answer;
};
