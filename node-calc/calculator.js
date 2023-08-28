const {plus} = require('./operation/add');
const {minusData} = require('./operation/minus');
const {multiData} = require('./operation/multi');
const {divData} = require('./operation/div');

function add(a, b) {
    return plus(a, b);
}

function minus(a, b) {
    return minusData(a, b);
}

function multi(a, b) {
    return multiData(a, b);
}

function div(a, b) {
    return divData(a, b);
}

module.exports.add = add;
module.exports.minus = minus;
module.exports.multi = multi;
module.exports.div = div;


