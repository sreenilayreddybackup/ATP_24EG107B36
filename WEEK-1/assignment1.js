// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28


//filter
const temperatures = [32, 35, 28, 40, 38, 30, 42];
let tempfilter=temperatures.filter((t)=>{
return t>35
})
console.log(tempfilter)


//map
let tempmap=temperatures.map((t)=>{
    return t=t*9/5+32
})
console.log(tempmap)

//reduce
let tempreduce=temperatures.reduce((acc,ele)=>acc+ele)
avg=tempreduce/temperatures.length
console.log(avg)

//find
let tempfind=temperatures.find((ele)=>{
return ele===40
})
console.log(tempfind)

//find index
let tempfindindex=temperatures.findIndex((ele)=>{
return ele===40
})
console.log(tempfindindex)













// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"

//     1. filter() courses with name length > 5
const courses = ["javascript", "react", "node", "mongodb", "express"];
let coursefilter=courses.filter((ele)=>ele.length>5)
console.log(coursefilter)


//     2. map() to convert course names to uppercase
let coursemap=courses.map((ele)=>ele.toUpperCase())
console.log(coursemap)

//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let coursereduce=courses.reduce((acc,ele)=>{
    acc=acc+"|"+ele
    return acc.toUpperCase()
})
console.log(coursereduce)


//     4. find() the course "react"
let coursefind=courses.find((ele)=>ele==='react')
console.log(coursefind)

//     5. findIndex() of "node"
let coursefindindex=courses.findIndex((ele)=>ele==='react')
console.log(coursefindindex)







// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92


const marks = [78, 92, 35, 88, 40, 67];

//1.filter

let marksfilter=marks.filter((ele)=>ele>=40)
console.log(marksfilter)

//2.map

let marksmap=marks.map((ele)=>ele+5)
console.log(marksmap)

//3.reduce

let marksreduce=marks.reduce((acc,ele)=>{
if(acc<ele){
    acc=ele
}
return acc
},0)

console.log(marksreduce)


//find
let marksfind=marks.find((ele)=>ele<40)
console.log(marksfind)

//findindex
let marksfindindex=marks.findIndex((ele)=>ele===92)
console.log(marksfindindex)