export function guid() {
  return new Promise((resolve, reject) => {
    setImmediate(resolve, s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4())
  })
}

export function crashGuid() {
  throw new Error('omg crash lol')
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}