let students = [
    { name: "Anas", score: 95 },
    { name: "Rahul", score: 82 },
    { name: "Amina", score: 68 },
    { name: "John", score: 45 }
];

students.forEach(student => {
    let grade;

    if (student.score >= 90) {
        grade = "A";
    } else if (student.score >= 75) {
        grade = "B";
    } else if (student.score >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    console.log(
        `Name: ${student.name} | Score: ${student.score} | Grade: ${grade}`
    );
});