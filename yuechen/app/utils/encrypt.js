const { Base64 } = require('js-base64')

let salting = 'admin-authority'

const encryptString = (name) => {
  return Base64.encode(name + salting)
}

const decodeString = (name) => {
  let decodeName = Base64.decode(name) || ""
  if (decodeName && decodeName.split(salting) && decodeName.split(salting)[0]) {
    return decodeName.split(salting)[0]
  } else {
    return ''
  }
}

module.exports = { encryptString, decodeString }