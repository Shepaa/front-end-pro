console.log("числа від 10 до 20: ")
let result = "";
for (let i = 0; i <= 10; i++) {
    result = result + ", " + i;
}
console.log(result);



console.log("квадрати чисел від 10 до 20: ")
let multiply = "";
for (let m = 0; m <= 10; m++) {
    multiply = multiply + ' ' + m * m;
}
console.log(multiply)




console.log("таблиця множення на 7: ")
for (let i = 1; i <= 10; i++) {
    let result = 7 * i;
    console.log(`7 * ${i} = ${result}`);
}



console.log("Сумма всех целых чисел от 1 до 15: ");
let sum = 0;
for (let i = 1; i <=15; i++){
    sum += i;
}
console.log(sum);



console.log("добуток усіх цілих чисел від 15 до 35: ")
let multi = 1n;
for (let i = 15n; i<=35; i++){
    multi = multi * i;
}
console.log(multi)




console.log("Среднее арифметическое всех целых чисел от 1 до 500: ");
let sumAverage = 0;
let count = 0;

for (let i = 1; i <= 500; i++) {
    sumAverage += i;
    count++;
}

const average = sumAverage / count;

console.log(average);