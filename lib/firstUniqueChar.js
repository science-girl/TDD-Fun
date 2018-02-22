const compress = require("./compression.js");
module.exports = stringToSearch => {
  //function s(stringToSearch) {
  if (!stringToSearch) return "requires a string";

  const compressedString = compress(stringToSearch);
  let compressed = compressedString.split("");

  let dictionary = {};
  // iterate through and find all the multiple instances of characters
  for (let i = 0; i < compressed.length; i += 2) {
    let key = compressed[i];
    let value = compressed[i + 1];
    // see if the key already exists in dictionary
    if (dictionary[key]) {
      // update the value
      dictionary[key] = parseInt(dictionary[key]) + parseInt(value);
    } else {
      // add it for the first time
      dictionary[key] = parseInt(value);
    }
  }
  const dictionaryArray = Object.values(dictionary);
  //console.log("d: " + dictionaryArray);
  const firstUniqueIndex = dictionaryArray.findIndex(char => {
    //console.log(char);
    return char === 1;
  });
  if (firstUniqueIndex => 0) return Object.keys(dictionary)[firstUniqueIndex];
};
//s("terfg");
