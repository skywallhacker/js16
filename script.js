function sort(a, b) {

    if (Array.isArray(a)) {
        console.log(Math.max(...a));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(Math.max(a, b));
    }
    else {
        let one = a.a
        let two = a.b
        let oneB = b?.a
        let twoB = b?.b
        if (b) {
            console.log(Math.max(one, two, oneB, twoB));
        }
        console.log(Math.max(one, two));
    }
}

sort(1, 2)
sort([1, 3,])
sort({ a: 1, b: 4 })
sort({ a: 1, b: 5 }, { a: 11, b: 12 })

let fkFib = +prompt('введите число')

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
alert(fib(fkFib))