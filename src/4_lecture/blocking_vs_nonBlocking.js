
function myFunction1() {
    console.log("Starting a task...");
    // Simulate a long-running task (blocking)
    let sum = 0;
    for (let i = 0; i < 3000000000; i++) { // A big loop!
        sum += i;
    }
    console.log("Task finished!");
    return sum;
}

console.log("Before the function call!")
let result =myFunction1();
console.log("After the function call");
console.log("RESULT:", result);
console.log("=================================");



function myFunction2() {
    console.log("Starting a task...");
    // Simulate a long-running task (non-blocking) - using setTimeout
    setTimeout(() => { // setTimeout is a built-in JavaScript function that executes a function after a specified delay (in milliseconds).
        let apiResponse = "Simulated API Response";
        apiResponse = { status: 200, data: { id: 1, name: "ReactJS", email: "test@test.se" } };

        console.log("Task finished!");
        console.log("API Response:", apiResponse);
    }, 2000); // 2-second delay (2000 milliseconds)
}

console.log("Before the function call!")
myFunction2();
console.log("After the function call");





