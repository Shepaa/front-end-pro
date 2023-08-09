class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getAverageMark() {
        return this.getMarksSum() / this.marks.length
    }

    getMarksSum() {
        return this.marks.reduce((acc, value) => acc + value, 0);
    }
}


class Group {
    #students = [];

    get students() {
        return this.#students
    }

    addStudent(student) {
        if (this.#isStudent(student)) {
            this.#students.push(student);
        }

    }

    #isStudent(student) {
        return (student instanceof Student);
    }


    getAverageMark() {
        return this.#getAverageMarksSum() / this.#students.length
    }

    #getAverageMarksSum() {
        const averageMarks = [].concat(...this.students.map(student => student.marks.reduce((acc, value) => acc + value, 0) / student.marks.length));
        return averageMarks.reduce((acc, mark) => acc + mark, 0);
    }
}

const group = new Group();


group.addStudent(new Student('John', [10, 8])); // средний балл = 9
group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
group.addStudent(new Student('Bob', [6, 10,])); // средний балл = 8


console.log(group.students.length === 3);
group.addStudent({}); // игнорируем добавление невалидных данных
console.log(group.students.length === 3);

// Выводим средний балл группы
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);

group.students = [new Student('John', [10, 10, 5, 10])]; // Сделать group.students - readonly
console.log(group.students.length === 3);
