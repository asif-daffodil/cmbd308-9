console.log("Hello, World!");
console.log("Hello, Universe!");

// fetch("https://jsonplaceholder.typicode.com/users").then(res => {
//     console.log(res);
// })

// async await

const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(data);
};

fetchUsers();