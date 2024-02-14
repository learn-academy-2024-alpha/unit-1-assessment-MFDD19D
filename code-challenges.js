// UNIT 1 ASSESSMENT: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and evaluates which of the strings has more characters. Use the test variables provided.

// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// Explain your code:

// --------------------1) Create a function that takes in an array of numbers and returns the sum of all the numbers. Use the test variables provided below.

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// // Expected output: 15
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // Expected output: 17

// function calculateSum(numbers) {
//         // declaring my function that takes in numbers in the array 
//     let num1 = 0
//         // we set our variable to num1 with the value placement at 0 which holds the sum within the array
//     for ( let i = 0; i < numbers.length; i++) {
//         //i went with a for loop casue its the only one that made the most sense. from within the array we are starting at index 0 within the array of numbers. we use the .legthn to go through the array of all numbers inside.
//         num1 += numbers[i]
//         // num one is our place value of where we will start at within the array. they will all add up

//     }
//     return num1
//     // this returns the sum of our funtion 

// }
// console.log(calculateSum(padres1984WorldSeriesRuns))
// // now were calling our function to add upp all the values within the array of padres1984WorldSeriesRuns
// console.log(calculateSum(padres1998WorldSeriesRuns))
// // Explain your code:

// // --------------------2) Create a function that takes in a string and  returns the string with all the characters in reversed order. Use the test variable provided below.

// const lesMiserables = "Jean Valjean"
// // Expected output: "naejlaV naeJ"

// const lionKing = "Simba"
// // Expected output: "abmiS"
// // // Explain your code:

// const reveWords = (words) => {
//     // we are creating our function name for reversing words within the array 
//     const splitWords = words.split('') 
//     // we are creating a function called splitWords that is going into the array and is splitting them to bei individually within the array 
//     const reversedLetters = splitWords.reverse()
//     // now that we have our words split individually within the array, we can call on the function .reverse method to reverse the letters within the array
//     const joinLetters = reversedLetters.join("")
//     // now that the characters are reversed, we create a function to join them with the .join('') (make sure we have the takcs together or else it will do a different funtions)
//     return joinLetters
//     // were returning pour whole function into one with the finished result of all characters split, reversed and joined giving us our desired outcome
// }

// console.log(reveWords(lesMiserables))
//     // calling up our words 
// console.log(reveWords(lionKing))

// // --------------------3) Create a function that takes in an array and returns an array with only the items from the third, fourth, and fifth indexes. Use the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: [42, 5, -5]

const cohortList = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
// Expected output: ["Delta", "Echo", "Foxtrot"]

// // Explain your code:
const selectItems = function(array) {
    //were declaring our variable and and calling it selectItems, we use the function array to define a anonymous function that should take the array as an argument and assigns a constant variable selectitems.

    return array.slice(3, 6)
    // we use the slice method to find only the third through the 5th index of the array of both stock exchange and cohort list?
}


console.log(selectItems(stockExchange))
// we log it the select items agains the stock exchange to make sure we get teh values within the index we need. 
console.log(selectItems(cohortList));