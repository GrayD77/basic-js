const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam (arr) {
  if (!Array.isArray(arr)) return false;
  
  return arr.reduce((acc, curr, i, a) => {
    if (!(typeof curr === 'string')) return acc;
    acc.push(curr.trim().toUpperCase().charAt(0));
    if (i === a.length - 1 ) return acc.sort().join('');
    return acc;
  }, []);
}

