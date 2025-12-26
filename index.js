//datejs is a tool required once, outside the function
require('datejs')

//Create a function that merges all usernames into one.
function combineUsers(...args) {
  const combinedObject = {
  users: []
  }

  for(let i = 0; i < args.length; i++) {
    combinedObject.users.push(...args[i])
  }

  combinedObject.merge_date = Date.today().toString("M/d/yyyy")

  return combinedObject
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};