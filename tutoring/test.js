// function starterFunction() {
//     const fruit = "apple";
//     const vegetable = "carrot";
//     let cheese = "gruyere";

//     const obj = {
//         sampleName: "Andres",
//         sampleNumber: "Eight",
//         sampleInteger: 8
//     }

//     showData(fruit);
//     estest(vegetable);
//     test(cheese);
//     estest(obj);
//     test(obj);
//     showData(obj)
// }

// function showData(someParam) {
//     console.log(someParam)
// }

// const estest = (alsoAParam) => {
//     console.log(alsoAParam)
// }

// const test = function (thisHasAParam) {
//     console.log(thisHasAParam)
// }

// starterFunction()

// const obj = {
//     dog: "husky",
//     name: "cloud"
// }

// const objTwo = {
//     age: 6,
//     ...obj
// }

// console.log(objTwo)

// function addition(num, ...numbers) {
//     console.log(num, numbers)
//     let total = 0
//     for(i=0; i< numbers.length; i++) {
//         total+=numbers[i]
//     }
//     return total
// }

// console.log(addition(10,1,2,3,4,5,6,7))

//map and filter

const arr = ["one", "two", "three"]

const newMap = arr.map(element => element+"A")
const newFilt = arr.filter(element => element.includes("o"))

console.log(arr)
console.log(newMap)
console.log(newFilt)