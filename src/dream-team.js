const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let x = []
  if (!Array.isArray(members)) {
    return false
  }
  members.forEach((mem) => {
    if (typeof mem !== 'string') {
      return false
    } else {
      let f = mem.trim()
      return x.push(f[0])
    }
  })

  let y = x.join('').toLocaleUpperCase().split('').sort().join('')
  if (y) {
    return y
  } else {
    return 'false'
  }
}

module.exports = {
  createDreamTeam,
}
