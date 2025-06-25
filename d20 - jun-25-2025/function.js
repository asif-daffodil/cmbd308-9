function func1 (msg1 = "Hi", msg2 = "bye") {
    return msg1 + " " + msg2;
}

console.log(func1("Hello", "World"));
console.log(func1("Hello", "Universe"));
console.log(func1());
console.log(func1("Good"));

const func2 = function () {
    return "This is a message";
}

console.log(func2());

const func3 = () => {
    return "This is a message";
}
console.log(func3());

const func4 = msg => msg;
console.log(func4("This is a message"));

// callback function
const func5 = (sName, city) => {
    return "Student name is : " + sName + " and his/her city is : " + city();
}

const func6 = () => "Dhaka";

console.log(func5("Akram", func6));
console.log(func5("Bulbul", () => "Kuakata"));

// recursion
const func7 = (num) => {
    if(num <= 1){
        return 1;
    }
    return num * func7(--num);
}

console.log(func7(5));