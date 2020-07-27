//  1 task 

console.log("My first debug")

//  2 task 

let petAge = 4
let petName = "Kpek"

console.log(petAge + ' y.o', 'Name: ' + petName)

//  3 task 

petAge = 5

console.log(petAge + ' y.o', 'Name: ' + petName)

//  4 task 

let myNumber = 5
let myString = "Vlad"
let isBool = true
let myNull = null
let isUndefined
const myObject = {
    name: "Vlad",
    age: 76
}

console.log(typeof myNumber, typeof myString, typeof isBool, typeof myNull, typeof isUndefined, typeof myObject, myNull)

//  5 task 

const student = {
    name: "{Vlad}",
    surname: "{Kulibaba}", 
    isActive: true
}

console.log(student.isActive, typeof student.isActive)

//  6 task 

let grapeftuit = {
    name: "Grapefruit",
    deliveryWeightOfKg: 200,
    isArrived: true
}

let grape = {
    name: "Grape",
    deliveryWeightOfKg: 150,
    isArrived: false
}

let kiwi = {
    name: "Kiwi",
    deliveryWeightOfKg: 300,
    isArrived: true
}

let pear = {
    name: "Pear",
    deliveryWeightOfKg: 30,
    isArrived: true
}

let peach = {
    name: "Peach",
    deliveryWeightOfKg: 400,
    isArrived: false
}

let myElementsOfFruit = [grapeftuit, grape, kiwi, pear, peach]
console.log(myElementsOfFruit)

let firstNumber = {
    number: 123,
    isEven: false
}

let secondNumber = {
    number: 8,
    isEven: true
}

let thirdNumber = {
    number: 39,
    isEven: false
}

let fourthNumber = {
    number: 489,
    isEven: false
}

let fifthNumber = {
    number: 98,
    isEven: true
}

let myElementsofNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber]
console.log(myElementsofNumbers)

let firstStudent = {
    name: "Liam",
    secondName: "Williams",
    age: 19,
    isStudy: true
}

let secondStudent = {
    name: "Noah",
    secondName: "Smith",
    age: 23,
    isStudy: true
}

let thirdStudent = {
    name: "Ethan",
    secondName: "Brown",
    age: 21,
    isStudy: false
}

let fourthStudent = {
    name: "Oliver",
    secondName: "Miller",
    age: 17,
    isStudy: true
}

let fifthStudent = {
    name: "Matthew",
    secondName: "Wilson",
    age: 24,
    isStudy: false
}

let myElementsOfStudents = [firstStudent, secondStudent, thirdStudent, fourthStudent, fifthStudent]
console.log(myElementsOfStudents)

//   * task

let myArrayOfTenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myArrayOfTenNumbers[0], myArrayOfTenNumbers[myArrayOfTenNumbers.length - 1])

//   ** task

console.log("студент: " + student.name + " " + student.surname + ", сейчас активен: " + student.isActive)
