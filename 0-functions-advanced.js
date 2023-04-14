// // What does this return?
// function sayHello(name) {
// 	return `Hello ${name}`
// }
// sayHello("Jean")

const player = {
	x: 0,
	energy: 10,
}
function movePlayer() {
	if (player.energy === 0) {
		return "You lose"
	}
	player.x += 1
	if (Math.random() > 0.5) {
		player.energy--
	}
}

for (let i = 0; i < 20; i++) {
	let result = movePlayer()
	if (result === "You lose") {
		console.log("You lost the game", i)
		break
	}
}

// let helloSomeone
// // What does this return?
// function logHello(name) {
// 	helloSomeone = `Heeeeey ${name} how ya doin' mate?`
// }

// logHello("Antoine")
// console.log("hellothere: ", helloSomeone)
// function sum(a, b) {
// 	console.log("a:  ", a, "b:", b)
// 	if (a % 2 === 0 && b % 2 === 0) {
// 		return a + b
// 	}
// 	return a - b
// }

// const result = sum(4, 5)
// console.log(result)

// Value versus reference
let a = 5
let b = a
a = 15

console.log(a, b)
const arrayA = [1, 2, 3]
// const arrayB = arrayA
const arrayB = [...arrayA]
arrayA[0] = "Hello refeerences"
console.log(arrayA, arrayB)

const cat = {
	name: "Illiu",
	age: 1,
}
const anotherCat = { ...cat }
cat.age++

console.log(cat, anotherCat)

const user = {
	name: "Bob",
	address: {
		city: "Paris",
	},
}

const userB = { ...user, address: { ...user.address } }

// Shallow copy

// Deep copy

const deepCopyOfUser = structuredClone(user)

const stringifiedUser = JSON.stringify(user)
console.log(typeof stringifiedUser, stringifiedUser)
const copiedUser = JSON.parse(stringifiedUser)
console.log(typeof copiedUser, copiedUser)

const deepCopy = JSON.parse(JSON.stringify(user))
