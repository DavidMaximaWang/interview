console.log("this is webpack demo");

function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

class People {
    constructor(name) {
        this.name = name
    }
    sayHi() {
        console.log(`${this.name} say hi`)
    }
}
const zhangsan = new People('Tom')
console.log(zhangsan.sayHi())