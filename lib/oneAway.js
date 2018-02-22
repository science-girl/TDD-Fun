//module.exports = (stringOne, stringTwo) => {
function ste(stringOne, stringTwo) {
  if (!stringOne || !stringTwo) {
    return undefined;
  }

  if (stringOne === stringTwo) return false;
  else if (stringOne.length === stringTwo.length) {
    //console.log(stringTwo.match(new RegExp(/[^b|^b[^a]|ba[^k]]/)));
    let count = 0;
    for (let i = 0; i < stringOne.length; i++) {
      if (stringOne.charAt(i) !== stringTwo.charAt(i)) {
        count++;
        if (count > 1) {
          return false;
        }
      }
    }
    return true;
  }
  // if lengths are different, check if a remove or insert will match
  // the strings successfully

  // replace stringTwo part that matches stringOne and test if
  // it equals the og stringTwo
  // replace with the substring of stringTwo where 0, lastIndexOf stringOne
  return stringOne.length < stringTwo.length
    ? stringTwo.replace(
        new RegExp(stringTwo.substring(0, stringOne.length)),
        stringOne
      ) === stringTwo
    : stringOne.replace(
        new RegExp(stringOne.substring(0, stringTwo.length)),
        stringTwo
      ) === stringOne;
}

console.log(ste("pale", "bale"));
