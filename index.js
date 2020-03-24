function isNumber(value, index) {
  return !isNaN(value[index])
}

function isUppercase(value, index) {
  return value.charCodeAt(index) >= 65 && value.charCodeAt(index) <= 90
}

function isLowercase(value, index) {
  return value.charCodeAt(index) >= 97 && value.charCodeAt(index) <= 122
}

function validatePassword(value) {
  if (value.length < 8) return false

  let number = 0
  let upper = 0
  let lower = 0
  let special = 0

  for (let i = 0; i < value.length; i++) {
    if (isNumber(value, i)) {
      number++
    } else if (isUppercase(value, i)) {
      upper++
    } else if (isLowercase(value, i)) {
      lower++
    } else {
      special++
    }
  }

  return number > 0 && upper > 0 && lower > 0 && special > 0
}

module.exports = validatePassword