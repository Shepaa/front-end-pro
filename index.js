const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]
let averageStudentMark = function (id, students) {
    const student = students.find((student) => student.id === id);
    if (!student) {
        return null;
    }
    const marksSum = student.marks.reduce((acc, mark) => {
        return acc + mark;
    }, 0);
    return marksSum / student.marks.length;
}
let averageGroupMark = function (students) {
    const marks = [].concat(...students.map(student => student.marks));
    const res = marks.reduce((acc, mark) => acc + mark, 0);
    return res / marks.length;
}
averageGroupMark(students);
averageStudentMark(13, students)



