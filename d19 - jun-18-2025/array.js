var studentName = ["Rayhan", "Mizanur", "Jafrina", "Labib", "Habibur"];
console.log(studentName);
console.log(studentName[1]);
studentName.push("Sakib", "Tamim", "Liton");
studentName.pop();
studentName.unshift("Hero Alom", "Dr. Yunus");
studentName.shift();
console.log(studentName);
console.log(studentName.length);
console.log(studentName.indexOf("Rayhan"));

// for loop
for (var i = 0; i < studentName.length; i++) {
    console.log(studentName[i]);
}