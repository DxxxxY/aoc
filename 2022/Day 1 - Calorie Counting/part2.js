//import from part1
const { elf, max, elves } = require("./part1.js")
console.log()

//get first elf and remove from array
const first = [elf, max]
elves.splice(elf - 1, 1)

//get second elf and remove from array
const second = [elves.indexOf(Math.max(...elves)) + 1, Math.max(...elves)]
elves.splice(second[0] - 1, 1)

//get third elf
const third = [elves.indexOf(Math.max(...elves)) + 1, Math.max(...elves)]

//print
console.log(`The three elves with the most calories are: ${first[0]}, ${second[0]} and ${third[0]}`)
console.log(`They have ${first[1]}, ${second[1]} and ${third[1]} calories respectively with a total of ${first[1] + second[1] + third[1]} calories.`)