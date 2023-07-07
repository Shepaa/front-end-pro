let counter = createCounter(1000);
console.log(counter.get()); // 1000
counter.inc(10);
console.log(counter.get()); // 1010
counter.minus(10);
console.log(counter.get()); // 1000
counter.set(100);
console.log(counter.get()); // 100
counter.reset()
console.log(counter.get()); // 1000
function createCounter(baseValue) {
    let counts;
    if (!isNaN(baseValue)) {
        counts = baseValue
    }
    return {
        inc: (incValue) => {
            (!isNaN(incValue)) ? counts += incValue : null;
        },
        minus: (minusValue) => {
            (!isNaN(minusValue)) ? counts -= minusValue : null;
        },
        set: (setValue) => {
            (!isNaN(setValue)) ? counts = setValue : null;
        },
        reset: () => {
            counts = baseValue;
        },
        get: () => counts
    };
}




