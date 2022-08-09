const _ = require('lodash')
const arr = [1,[1,[1,[1]]]]

const newArr = _.flattenDeep(arr)

console.log(newArr);
console.log("Hello World");