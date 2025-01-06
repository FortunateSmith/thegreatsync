// EXERCISE 1

// Loop through the array below and console.log the result of each 
// student's score. Create a sentence for each that looks like:
// "Shona's score was 26"
// Use a For loop initially, and then change it to for...of

// const results = [
//     { name: 'Shona', score: 36}, 
//     { name: 'Wasim', score: 66}, 
//     { name: 'Arif', score: 21}, 
//     { name: 'Harvie', score: 18}, 
//     { name: 'Merryn', score: 94},
//     { name: 'Fearne', score: 42},
//     { name: 'Josie', score: 39},
//     { name: 'Kajetan', score: 55},
//     { name: 'Emyr', score: 54},
//     { name: 'Waqas', score: 70},
//     { name: 'Jean-Luc', score: 12}
// ];

// for (let i = 0; i < results.length; i++) {
//     console.log(`Using a For Loop, ${results[i].name}'s score was ${results[i].score}`);
// }

// for (let result of results) {
//     console.log(`Using a For...Of Loop, ${result.name}'s score was ${result.score}`)
// }


// EXERCISE 2

// You have been given the task to evaluate the performance of a class of students based on their collective scores.
// If more than 3 students fail, the whole class has to redo the course. It's a team effort!
// 50% and above is a Pas
// First we will need to create a few variables

// STEP 1

// Initialize the variables `failCount` and `currentIndex` to 0.
// `failCount` keeps track of the number of students who failed,
//  and `currentIndex` helps iterate through the `results` array.
// let failCount = 0;
// let currentIndex = 0;

// Define a constant variable `scoreTotal` and set it to the maximum possible score in the course.
// In this case, the maximum score is 70.
// const scoreTotal = 70;

// STEP 2 - YOUR TURN

// Complete these steps

// Use a `while` loop to iterate over the `results` array.
//    The loop continues as long as `failCount` is less than 3 (indicating no more than three students have failed)
//    and `currentIndex` is within the bounds of the array.

// while (currentIndex < results.length || failCount < 3) {
//     let scorePercentage = Math.round((results[currentIndex].score/scoreTotal) * 100)
//     if (scorePercentage < 50) {
//         failCount++
//         console.log(failCount);
//     }
//     console.log(`${results[currentIndex].name}'s score percentage is ${scorePercentage}.`)
//     currentIndex++
// }

// if (failCount <= 3) {
//     console.log(`Oh shit! The failcount is ${failCount} so the entire class has to redo the course :(`)
// } else {
//     console.log('Yayy!')
// }

// Inside the loop, calculate the `scorePercentage` for the current student.
//    Divide their score (`results[currentIndex].score`) by `scoreTotal` and multiply it by 100.
//    Round the percentage using `Math.round()` for simplicity.

// Check if the `scorePercentage` is less than 50.
//   If it is, increment the `failCount` variable by 1.
 
// Increment the `currentIndex` by 1 at the end of each iteration to move to the next student's result.


// After the loop finishes, check if the `failCount` is greater than or equal to 3.
// If it is, log the message "Oh no, the entire class has to redo the course :(" to the console.
// Otherwise, log the message "Yay :)".

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log("Our number is: ", i);
    }, 2000)
    // i++;]
    console.log("Am I waiting?")
}