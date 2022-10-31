function isArg(a) {
    return function(b) {
        return a + b
    };
}
let c = isArg(30)

console.log( c(0), c(30));
console.log( isArg(1)(2), isArg(1)(1));