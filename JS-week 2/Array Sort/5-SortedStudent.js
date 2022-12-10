// Sorting by Multiple Properties
// When it comes to objects, we can sort by their properties.

// Let's consider some students:

// const students = [
//     { id: 1, graduated: true, grade: 86 },
//     { id: 2, graduated: false, grade: 96 },
//     { id: 3, graduated: false, grade: 78 },
//     { id: 4, graduated: true, grade: 96 },
// ];
// Let's sort this list by two rules in the following priority:

// Students who Graduated
// Highest Grades
// const students = [
//     { id: 4, graduated: true, grade: 96 },
//     { id: 1, graduated: true, grade: 86 },
//     { id: 2, graduated: false, grade: 96 },
//     { id: 3, graduated: false, grade: 78 },
// ];
//  Now the list shows the graduated students at the top and then it sorts those groups by the highest grades.

//  To compare students, this can be broken up into three scenarios.

//  Your Goal: Sort Students
// Given an array of students, sort first by graduated then by grade like in the example above.

// Each object in the students array will have properties id, graduated and grade just like in the example shown above.

//  For debugging purposes, the tests will log your actual results versus the expected test results.

function sortStudents(students) {
    const sortedS = students.sort((a, b) => {
        if (a.graduated !== b.graduated) {
            return a.graduated ? -1 : 1;
        }
        if (a.grade !== b.grade) {
            return b.grade - a.grade;
        }
        return 0;
    }
    );
}