// console.log("test")
var a = 5 

const z = [1,2,3,4]
let q = `this is string ${z}`

var b = "11"
// console.log(z)
// console.log(typeof b)
b = parseInt(b)
// console.log(typeof b)
b = b.toString()
// console.log(typeof b)

let arr = [21,2,3,4]
let arr2 = new Array(1,2,3)
arr[1] = 1
arr.push(10)
arr.unshift(12)
arr.shift()
// console.log(arr)
// console.log(arr2[arr2.length-1])

arr = [1,2,3,4,5]
arr.splice(1,0,7)
let arr3 = arr.splice(1,3)
// console.log(arr3)

let num = [1,2,3,4,5]

let evenNum = num.filter(item => getEven(item) && morethanthree(item)) // filter the number through the functions, takes bool
function getEven(x){
    if(x % 2 == 0) return true
    else return false
}
function morethanthree(x){
    if(x > 3) return true
    else return false
}
// console.log(evenNum)

let numDouble = num.map(item => timesTwo(item)) // double all the numbers using the function through map
function timesTwo(x){
    return x*2
}
// console.log(numDouble)

let numTotal = num.reduce(add)
function add(a,b){
    // console.log(a , " " , b)
    return a * b
}
// console.log(numTotal)

let numSOrt = num.sort((a,b) => b-a)
// console.log(numSOrt)

let num2 = [6,7,2,4,6,9]
let numReverse = num2.reverse()
// console.log(numReverse)

const multiply = function(x,y){
    return x*y
}

const divide = (x,y) => {
    return x/y
}

// for (let x = 0;x < 10;x++){ console.log(x) }

let arr5 = ['hi', 'asd', 'qwe']
/*
for (let x = 0;x < arr5.length ; x++){
    console.log(arr5[x])
}

for(let item of arr5){
    console.log(item)
}
*/

let y = 0
while(y > 0 & y < 10){
    y++
}
// console.log(y)

do {
    y++
}
while(y > 0 & y < 10)
// console.log(y)

let n2 = 5
// console.log(n2 == "5") // check value 
// console.log(n2 === "5") // check type and value

const checkMoreThanFour = (x) => {
    return x > 4 ? 'yes' : 'no'
}
// console.log(checkMoreThanFour(2))

let item = 'BIKE'
let result
switch (item){
    case 'CAR':
        result = 1
        break
    case 'BIKE':
        result = 2
        break
    case 'BOOK':
        result = 3
        break
    default:
        result = 4
}
// console.log(result)

let store = {
    'name' : 'Icebear',
    'age' : 10
}

let name2 = store.name
// console.log(name2)

store.skill = 'eat'
store['skill'] = 'sleep'
// console.log(store.skill)

delete store.skill
// console.log(store.skill)

let key = Object.keys(store)
// console.log(key)
let values = Object.values(store)
// console.log(values)

const printResult = function(x){
    console.log(x)
}
const second = (x) => {
    console.log("second callback" , x)
}
let c = 0
const addNumber = (a,b, callback, callback2) => { // use callback to execute the functions sequentially
    c = c + a + b
    callback(c)
    callback2(c)
}
addNumber(1,2,printResult, second)

const checkIfMoreThanFIve = function(x){
    return new Promise((resolve, reject) => { 
        if(x > 5){ resolve('YES')}
        else{ reject('NO')}
    })
}
const test = function(){
    checkIfMoreThanFIve(6)
    .then((result)=> {console.log(result); console.log('DONE')})
    .catch((err) => console.log('WRONG'))
    // console.log('DONE')
}

const test2 = async function(){
    try {
        let result = await checkIfMoreThanFIve(6) // waiting for this line to executed with await
        console.log(result)
        console.log('DONE')
    }
    catch {
        console.log('WRONG')
    }
}
test2()