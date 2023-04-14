const students = require("./data.json")

function sayHello(person, i, arr) {
	console.log(`Hey ${person.firstName}!`)
}

// forEach allow us to loop over an array.
// We can do something on every single iteration.
// forEach does not return anything

students.forEach(sayHello)
students.forEach((person, i, arr) => console.log(`Hey ${person.firstName}!`))

students.forEach(function (student) {
	console.log(`Hey ${person.firstName}!`)
})

function giveMyPhoneNumber(callMeBack) {
	callMeBack("Katy perry")
}

function callingMe(name) {
	console.log(`Hey this is ${name}!`)
}

function nightHabit(firstStep, secondStep, thirdStep) {
	firstStep()
	secondStep()
	thirdStep()
	return "Damn I woke up too late!"
}

let result = nightHabit(eatDinner, brushMyTeeth, goToSleep)
console.log(result)

function eatDinner() {
	console.log("eating dinner")
}
function brushMyTeeth() {
	console.log("brushing my teeth")
}

function goToSleep() {
	console.log("ZZZZZZ")
}

giveMyPhoneNumber(callingMe)
