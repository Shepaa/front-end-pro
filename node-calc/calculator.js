const {plus} = require('./operation/add');
const {minusData} = require('./operation/minus');
const {multiData} = require('./operation/multi');
const {divData} = require('./operation/div');

module.exports.add = plus;
module.exports.minus = minusData;
module.exports.multi = multiData;
module.exports.div = divData;


