function Calculator(baseValue) {
    if (validation(baseValue)) {
        this.baseValue = baseValue;
        this.counts = baseValue;
    }
    this.add = function (value) {
        if (validation(value)) {
            this.incValue = value;
            this.counts += this.incValue;
        }
    }
    this.minus = function (value) {
        if (validation(value)) {
            this.minusValue = value;
            this.counts -= this.minusValue;
        }

    }
    this.set = function (value) {
        if (validation(value)) {
            this.setValue = value;
            this.counts = this.setValue;
        }

    }
    this.reset = function () {
        this.counts = this.baseValue;
    }
    this.get = function () {
        return this.counts;
    }

    function validation(value) {
        if (!isNaN(value)) {
            return true;
        }
    }
}

const counter = new Calculator(1000);
console.log(counter.get()); // 1000
counter.add(10);
console.log(counter.get()); // 1010
counter.minus(10);
console.log(counter.get()); // 1000
counter.set(100);
console.log(counter.get()); // 100
counter.reset()
console.log(counter.get()); // 1000

