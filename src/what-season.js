const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented')
  // if (date.length < 7) {
  //   return console.log('hhhh')
  // }
  // if (!date) {
  //   return 'Unable to determine the time of year!'
  // } else if (!date.getMonth || !date.valueOf() || date.length <= 8) {
  //   return 'Invalid date!'
  // } else {
  //   let getMonth = date.getMonth()
  //   if (
  //     getMonth === 11 ||
  //     getMonth === 0 ||
  //     getMonth === 1 ||
  //     date.values === 'winter'
  //   ) {
  //     // console.log(date.parse())
  //     // console.log(date.values)
  //     return 'winter'
  //   } else if (
  //     getMonth === 2 ||
  //     getMonth === 3 ||
  //     getMonth === 4
  //     // date(value) === spring
  //   ) {
  //     return 'spring'
  //   } else if (
  //     getMonth === 5 ||
  //     getMonth === 6 ||
  //     getMonth === 7
  //     // date(value) === summer
  //   ) {
  //     // console.log(date.length)
  //     return 'summer'
  //   } else if (
  //     getMonth === 8 ||
  //     getMonth === 9 ||
  //     getMonth === 10
  //     // date(value) === autumn
  //   ) {
  //     // console.log(date.valueOf)
  //     return 'autumn'
  //   }
  // }
  // remove line with error and write your code here
}
// console.log(getSeason(new Date(2455, 5, 17, 19, 809)))
// console.log(getSeason(new Date(2019, 11, 22, 23, 45, 11, 500)))
// console.log(getSeason(new Date()))
// console.log(getSeason('new Date'))
// console.log(getSeason({ John: 'Smith' }))
// console.log(getSeason(20192701))
// console.log(getSeason([2019, '27', 0 + '1']))
// console.log(getSeason(() => new Date()))
// console.log(getSeason('winter'))

module.exports = {
  getSeason,
}
