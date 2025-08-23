const students =[
    {name: "Alice Cooper", marks: 85},
    {name: "bob alice", marks: 42},
    {name: "Alice Wonderland", marks: 70},
    {name: "david", marks: 30}
];

function processData(students){ 
    const filtered = students.filter(student =>
        student.name.trim().toLowerCase().includes("alice") && student.marks >= 50
    );
    const sorted = filtered.sort((a, b) => b.marks - a.marks);
    const ranked = sorted.map((student, idx) => ({
        name: student.name.trim().toUpperCase(),
        score: student.marks,
        rank: idx + 1
    }));
    const totalPassed = ranked.length;
    return {
        totalPassed,
        students: ranked
    };
}
const result = processData(students);
console.log(result);







