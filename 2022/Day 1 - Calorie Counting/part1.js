//import
const fs = require("fs")

//get input
const input = fs.readFileSync("input.txt", "utf8")

//separate input into array
const calories = input.split("\n").map(calorie => calorie.replace("\r", ""))

//init elves array
const elves = []
let tempCalories = 0

//for each calorie
calories.forEach(calorie => {
    //if calorie is not a number (empty line), then his inventory ends, and we add him to the elves array
    if (Number.isNaN(parseInt(calorie))) {
        elves.push(tempCalories)
        tempCalories = 0
        return
    }

    //else keep counting
    tempCalories += parseInt(calorie)
})

//get max of array
const max = Math.max(...elves)

//get elf who has max 
const elf = elves.indexOf(max) + 1

//print
console.log(`The elf who has the most calories is the ${elf}th and he has ${max} calories.`)

module.exports = { elf, max, elves }