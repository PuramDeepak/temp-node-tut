const path = require('path')

console.log(path.sep)

const filepath = path.join('/content','subfolder','test.txt')
console.log(filepath)

const base = path.basename(filepath) // basename is the module to return file name

console.log(base)


const abs = path.resolve(filepath) // resolve will give complete location
console.log(abs);


