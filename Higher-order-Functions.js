const students = require("./data.json")

// forEach allow us to loop over an array and do something, like executing a function on evry element.

students.forEach((student) => {
	console.log(`hello ${student.firstName}`)
})

// map creates a copy of the Array and allow you to modify it.

const capitalizedStudents = students.map((student) => {
	return student.firstName[0].toUpperCase() + student.firstName.slice(1)
})
console.log("Respecting some conventions:", capitalizedStudents)

const ironhackers = students.map((student) => {
	return { ...student, ironhacker: true }
})
console.log("All hackers now:", ironhackers)

// Filter allow you to filter out some elements based on a condition

const studentsInTheirThirties = students.filter((student) => {
	return student.age >= 30
})
console.log("Students which are 30+ :", studentsInTheirThirties)

// find is like filter but it will stop on the very first positive match.

const firstStudentWhoseNameStartWithM = students.find((student) => {
	return student.firstName.startsWith("m")
})

// Reduce allow you to reduce an Array to a single value
// It is the swiss knife of the HoF, it can do what other HoF do, it is by far the most complex one.

const sumOfAges = students.reduce((acc, val) => {
	return acc + val.age
}, 0)
console.log("sum of ages: ", sumOfAges)

//  [].reduce((acc, val) => {}, )
const reorganisedStudents = students.reduce((acc, val) => {
	// example: val is {age: 27, firstName: "Bob"}
	// acc is {'20': ['Alice', 'Foo']}
	// acc['20']
	if (acc[val.age]) {
		// This is true because acc[val.age] => acc['20'] which is ["Alice", "Foo"]
		// So we push the student name.
		acc[val.age].push(val.firstName)
	} else {
		// If we did not have a match (say val is {name: 'Bar', age: 27})
		// Then we create a key in the accumulator, this key's value is an Array with the student name.
		acc[val.age] = [val.firstName]
	}

	// We always need to return the accumulator, else it becomes undefined
	return acc
}, {})

console.log(reorganisedStudents)
