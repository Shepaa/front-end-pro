console.log(/love/.test('I love JavaScript')) // true
console.log(/love/.test('I JavaScript')) // false

console.log(/ing$/.test('Good morning')) //true
console.log(/ing$/.test('Good morning!')) //false