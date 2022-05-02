const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  let x = s1.split(''),
    y = s2.split('')
  let res = 0
  x.forEach((e) => {
    if (y.includes(e)) {
      res++
      y.splice(y.indexOf(e), 1)
    }
  })
  return res
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount,
}
