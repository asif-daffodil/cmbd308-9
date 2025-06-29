// let x = 0;
// while (x < 10) {
//     console.log(x);
//     x++;
// }

// let y = 20;
// do {
//     console.log(y);
//     y++;
// } while (y < 10);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// const students = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"];

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// students.forEach((val, ind) => {
//     console.log(ind + " : " + val);
// });

// const mapData =  students.map((val, ind) => {
//     console.log(ind + " : " + val);
//     return val;
// });

// console.log(mapData);

// const filteredStudents = students.filter((val, ind) => {
//     // return val.startsWith("A");
//     return val.length <= 4;
// });

// console.log(filteredStudents);

const myClass = {
    className: "JavaScript",
    organization: "CMBD",
    language: "Bengali",
    studentCount: 28,
    isActive: true,
    foreignStudents: null
}

// for (let key in myClass) {
// for (const key in myClass) {
//     console.log(key + " : " + myClass[key]);
// }

// for (const key of myClass)
for (const key of Object.keys(myClass)) {
    console.log(key + " : " + myClass[key]);
}