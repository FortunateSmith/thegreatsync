
// Single-purpose functions that return boolean values
// in arrow functions, a statement on one line can omit the return statement
// But our evil statesman is still there doing his work
const isWeekend = (day) => ['Saturday', 'Sunday'].includes(day);
const isWorkday = (day) => !isWeekend(day);
const isHoliday = (day, holidays) => holidays.includes(day);

// A function that determines the activity based on conditions
// if statements combined with conditionals can be super powerful
const getActivity = (day, holidays) => {
  if (isWeekend(day)) return 'Relax';
  if (isHoliday(day, holidays)) return 'Celebrate';
  if (isWorkday(day)) return 'Work';
};

// This return statement is used to exit the function early
// if the argument supplied is invalid!
const calculateSquare = (number) => {
  if (typeof number !== 'number') return 'Input must be a number'; // Exit early for invalid input
  return number * number; // Main logic
};

// it can make the code neat and easy to read
const getDiscount = (userType) => {
  if (userType === 'student') return 10;
  if (userType === 'teacher') return 15;
  if (userType === 'senior') return 20;
  return 0; // Default case
};

getDiscount('student'); // 10
getDiscount('senior');  // 20
getDiscount('guest');   // 0



// A standalone function defined in the global scope
function logTask(taskName) {
    console.log(`Task logged: ${taskName}`);
}

// Decided to group related functions into a single object
const taskManager = {
    log: logTask, // Used the reference
    complete(taskName) { // Another related function - called a method
        console.log(`Task completed: ${taskName}`);
    }
};

// Using the function through the object
taskManager.log("Write documentation"); // Output: "Task logged: Write documentation"
taskManager.complete("Write documentation"); // Output: "Task completed: Write documentation"