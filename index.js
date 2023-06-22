console.log("числа від 10 до 20: ")
let result = "";
for (let i = 10; i <= 20; i++) {
    result += i;
    if (i !== 20){
        result = result + ","
    }
}
console.log(result);


console.log("квадрати чисел від 10 до 20: ")
let square = "";
for (let i = 10; i <= 20; i++) {
    square = square + ' ' + i * i;
}
console.log(square);


console.log("таблиця множення на 7: ")
for (let i = 1; i <= 10; i++) {
    let result = 7 * i;
    console.log(`7 * ${i} = ${result}`);}


    console.log("Сумма всех целых чисел от 1 до 15: ");
    let sum = 0;
    for (let i = 1; i <= 15; i++) {
        sum += i;
    }
    console.log(sum);


    console.log("добуток усіх цілих чисел від 15 до 35: ")
    let multi = 1n;
    for (let i = 15n; i <= 35; i++) {
        multi = multi * i;
    }
    console.log(multi);


    console.log("Среднее арифметическое всех целых чисел от 1 до 500: ");
    let sumAverage = 0;
    let count = 0;
    for (let i = 1; i <= 500; i++) {
        sumAverage += i;
        count++;
    }
    const average = sumAverage / count;
    console.log(average);


    let sumOfEvenDigits = 0;
    for (let i = 30; i <= 80; i++) {
        if (i % 2 === 0) {
            sumOfEvenDigits += i;
        }
    }
    console.log("Сумма чётных чисел от 30 до 80: " + sumOfEvenDigits);




let output = '';

for (let i = 10; i <= 20; i++) {
    output += i;

    if (i !== 20) {
        output += ', ';
    }
}

console.log(output);
