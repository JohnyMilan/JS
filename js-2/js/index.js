//   Task 1

console.log("---------------Task 1--------------")
console.log(1 == 2)
console.log(1 != 2)
console.log(1 == 1)
console.log(1 != 1)
console.log("text" == 5)
console.log("text" != 5)
console.log("text" == "Text")
console.log("text" == "text")
console.log(true == "true")
console.log(true == false)
console.log(false == 0)
console.log(false === 0)
console.log("" == false)
console.log("" !== false)
console.log(undefined === null)
console.log(undefined == null)
console.log(17 === true)
console.log("17" === true)
console.log({} === {})

//   Task 2

console.log("---------------Task 2--------------")
let isEven = prompt("Введите число!")
console.log(isEven % 2 == 0)
 
//   Task 3

console.log("---------------Task 3--------------")
let isNotEven = prompt("Введите число!")
console.log(isNotEven % 2 == 1)

//   Task 4

console.log("---------------Task 4--------------")
let myNumberOperations = 5
myNumberOperations+=4
console.log(myNumberOperations)
myNumberOperations-=10
console.log(myNumberOperations)
myNumberOperations**=2
console.log(myNumberOperations)

//   Task 5

console.log("---------------Task 5--------------")
let a = "100"
console.log(+a)
console.log(Number(a))
console.log(a/=1)

//   Task 6

console.log("---------------Task 6--------------")
let x = prompt("Введите x:")
let y = prompt("Введите y:")
let myResult

myResult = x**2 - y**2

console.log("Это равно: ", myResult)

//    Task *

console.log("---------------Task *--------------")
let myStarResult

myStarResult = (Number(isEven) + 10) + (Number(isNotEven) + 10) + (Number(x) + 10)
console.log(myStarResult)
alert(myStarResult)

//    Task **

console.log("---------------Task **--------------")
let sideA = 4
let sideB = 2
let sideC = 5

console.log("by code")
console.log(sideA + sideB > sideC && sideA + sideC > sideB && sideC + sideB > sideA)

console.log("by person")
console.log(Number(isEven) + Number(isNotEven) > Number(x) && Number(isEven) + Number(x) > Number(isNotEven) && Number(x) + Number(isNotEven) > Number(isEven))

//    Task ***

console.log("---------------Task ***--------------")
let cubeSumA = Math.floor(Math.random()*(10-1)+1)
let cubeSumB = Math.floor(Math.random()*(10-1)+1)
console.log(cubeSumA)
console.log(cubeSumB)
console.log("Куб суммы: ", (cubeSumA + cubeSumB) ** 3)
