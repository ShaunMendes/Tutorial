const $ = require("jquery");

function* gen() {
    //yield used to pause the function
    const x = yield 'pear'
    const y = yield 'banana'
    const z = yield 'apple'
    return x + y + z
}
const myGen = gen();

//Generator functions returns an iterator hence the next() is used
console.log(myGen.next())
console.log(myGen.next(10))
console.log(myGen.next(5))
console.log(myGen.next(3))