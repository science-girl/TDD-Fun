module.exports = (start, end, jumpLength) => {
  if (isNaN(start) || isNaN(end) || isNaN(jumpLength)) {
    return "expected a start, end, and jumpLength";
  }
  return 0 || start < 0 || end < 0 || jumpLength <= 0 || end < start
    ? 0
    : (Math.round(end) - Math.round(start)) / Math.round(jumpLength);
};
