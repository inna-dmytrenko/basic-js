const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  let res = {}
  domains.forEach((el) => {
    let str = '',
      arr = []
    for (let i = el.split('.').length - 1; i >= 0; i--) {
      str += `.${el.split('.')[i]}`
      arr.push(el.split('.')[i])
      let r = 0
      domains.forEach((x) => {
        if (x.includes([...arr].reverse().join('.'))) {
          r++
        }
      })
      res[str] = r
    }
  })
  return res
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats,
}
