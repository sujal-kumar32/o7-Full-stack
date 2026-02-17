let courses = ["JS", "HTML", "CSS", "React"];

//Q1. Add "Node" at the end
courses.push("Node");
console.log("After Push:", courses);

//Q2. Remove first element
courses.shift();
console.log("After Shift:", courses);

//Q3. Get only "HTML" and "CSS" (no change in original)
console.log("Slice Result:", courses.slice(0, 2));

//Q4. Replace "CSS" with "Tailwind"
courses.splice(1, 1, "Tailwind");
console.log("After Splice:", courses);

//Q5. Check if "React" exists
console.log("Includes React?:", courses.includes("React"));

//object

let user = { name: "John", age: 22, city: "Delhi" };

//Q1. Access age
console.log("Age:", user.age);

//Q2. Update city to "Mumbai"
user.city = "Mumbai";
console.log("Updated City:", user.city);

//Q3. Add email key
user.email = "sujalstark12345@gmail.com";
console.log("User with Email:", user);

//Q4. Delete age
delete user.age;
console.log("User after deleting age:", user);

//Q5. Get all keys
console.log("All Keys:", Object.keys(user));
