const QUESTIONS = [
    {
        question: 'Сколько хромосом у здорового человека? ',
        answer: '46',
        type: 'prompt',
    },
    {
        question: 'Путин - хуйло?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Сколько хромосом у Путина? ',
        answer: '47',
        type: 'prompt',
    },
    {
        question: 'Сколько тупых овец в московии (в млн)?',
        answer: '144',
        type: 'prompt',
    },
    {
        question: 'Снесли ли памятник Екатерине-2 в Одессе?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Сколько черных пакетов выделяются на одного орка?',
        answer: '1',
        type: 'prompt',
    },
    {
        question: 'На сколько вы оцениваете работу ЗСУ от 1 до 10?',
        answer: '10',
        type: 'prompt',
    },
    {
        question: 'Со скольких позиций готовилось нападение на Беларусь?',
        answer: '4',
        type: 'prompt',
    },
    {
        question: 'Нужно ли сжигать сосийский флаг?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Поддерживаете ли вы уход иностранных компаний из московии?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Считаете ли вы сосию своим домом',
        answer: false,
        type: 'confirm',
    },
];
QUESTIONS.forEach(question => {
    question.score = checkScore(question.answer, getAnswer(question.question, question.type));
});
alert(sumScore(QUESTIONS));


function checkScore(answer, userAnswer) {
    let score;
    (answer === userAnswer) ? score = 10 : score = 0;

    return score;
}


function sumScore(questions) {
    let scoreSum = 0;
    questions.forEach(function (question) {
        scoreSum += question.score;
    })
    return scoreSum;
}


function getAnswer(question, type) {
    let answer = null;
    if (type === 'prompt') {
        answer = prompt(question);
    } else if (type === 'confirm') {
        answer = confirm(question);
    }
    return answer;
}


