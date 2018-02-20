module.exports = palindrome => {
  // no argument provided
  if (!palindrome) return false;
  else if (typeof palindrome != "string" || palindrome.length <= 1)
    return false;

  // strip potential palindrome of punctuation and spacing
  const cleansedPalindrome = palindrome
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"\s]/g, "");

  return (
    cleansedPalindrome
      .split("")
      .reverse()
      .join("") === cleansedPalindrome
  );
};
