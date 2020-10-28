//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your 
//fortune yourself? Store the following into variables: 
//job title, geographic location, annual salary, company name. 
//Output your fortune to the console like so: 
//"You will be a X in Y, making $N for Z."

let jobTitle = `UX designer`
let geoLocation = `California`
let annualSalary = 80000
let companyName = `Apple`

console.log(`You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}.`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in 
//a variable. Store their birth year in a variable. 
//Calculate their age based on the stored values. 
//Output them to the console like so: "They are NN years old.", 
//substituting the values.

let currentYear = 2020;
let birthYear = 1996;
let age = currentYear - birthYear;

console.log(`They are ${age} years old.`);

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? 
//Wonder no more! Store your current age into a variable. 
//Store a maximum age into a variable. 
//Store an estimated amount per day (as a number). 
//Calculate how many you would eat total for the rest of your life. 
//Output the result to the console like so: 
//"You will need NN to last you until the ripe old age of X".

let currentAge = 24;
let maxAge = 100;
let perDay = 2;
let daysofYear = 365;

let remainingYears = maxAge - currentAge;
let dailySnacks = daysofYear * perDay;
let totalSnacks = dailySnacks * remainingYears;

console.log(`If I eat ${perDay} snacks a day, I'll need ${totalSnacks} snacks to last me until the ripe old age of ${maxAge}.`);

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. 
//Store a radius into a variable. Calculate the circumference based 
//on the radius, and output "The circumference is NN". Calculate the 
//area based on the radius, and output "The area is NN".

// Rocco - the reason why I do the caluations in variables instead of straight 
// in the console.log output is because it helps me understand it better
// seeing it visually like this. Hope thats cool.

let radius = 5
let pi = Math.PI
let circumference = (2 * 5) * pi
let area = pi * (radius ** 2)

console.log(`The circumference is ${circumference}cm. The area is ${area}cm.`)

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. 
//Store a celsius temperature into a variable. 
//Convert it to fahrenheit and output "NN°C is NN°F".  
//Now store a fahrenheit temperature into a variable. 
//Convert it to celsius and output "NN°F is NN°C."

let celciusTemp = 20;
let fahrenheitTemp = celciusTemp * 9/5 + 32

console.log(`${celciusTemp}°C is ${fahrenheitTemp}°F.`)

fahrenheitTemp = 20;
celciusTemp = (fahrenheitTemp - 32) * 5/9

console.log(`${fahrenheitTemp}°F is ${celciusTemp}°C.`)


// EXERCISE 1
// Write a function named squareNumber that will take one argument 
//(a number), square that number, and return the result. 
//It should also log a string like "The result of squaring the number 3 is 9."


/* for the purposes of showing you i can do it both ways
function squareNumber(num) {
    return num ** 2
}
let sqNum = 6;
console.log(`The square root of the number ${sqNum} is: ${squareNumber(sqNum)}.`)
*/

function squareNumber(num) {
    console.log(`The square root of the number ${num} is: ${num ** 2}.`)
    return num ** 2
}

let x = 6
squareNumber(x)


// EXERCISE 2
// Write a function named halfNumber that will take one argument 
//(a number), divide it by 2, and return the result. It should also 
//log a string like "Half of 5 is 2.5.".

// now using the console.log in function method, which i prefer
//again so halfNumber(10) calls 10 into num, then do the calculations in that
//function, and if you want to change the number, change it in halfResult
function halfNumber(num) {
    console.log(`Half of ${num} is ${num / 2}.`)
    return num / 2
}

halfNumber(10)


// EXERCISE 3
// Write a function named percentOf that will take two numbers, 
//figure out what percent the first number represents of the second number, 
//and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(numA,numB){
    let result;
    // trying out putting a var result in and returning the var instead of what i did previously
    console.log(`${numA} is ${result = (numA / numB) * 100}% of ${numB}.`)
    return result;
}

percentOf (10,5)


// EXERCISE 4
// Write a function named areaOfCircle that will take 
//one argument (the radius), calculate the area based on that, and 
//return the result. It should also log a string like 
//"The area for a circle with radius 2 is 12.566370614359172."
//Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle (rad) {
    let area = Math.PI * (rad ** 2)
    console.log(`The area for a circle with radius ${rad} is ${area.toFixed(2)}.`)
    return area
}

areaOfCircle(7)


// EXERCISE 5
// Write a function named runAll that will take one argument (a number) 
// and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).


function runAll (num) {

    let half = halfNumber(num);
    // this should take my half number function and half 7 into 3.5

    let sqRoot = squareNumber(half);
    // this should square root 3.5 cuz its taking my half var and using my function 
    // squareNumber to square root it

    let areaCir = areaOfCircle (sqRoot);
    // this should calulate the area of 12.25, same concept as above

    let perOf = percentOf(areaCir, sqRoot);
    // this should tell me what percentage the area is of 12.25

    return perOf
}



//DOM Exercise:
//In HTML, create an <ol>
//Within the ordered-list, add 10 <li>
//Give each list-item a unique id (ex1, ex2, etc, for example)
//Instead of outputting to the console, put the string output 
//from the previous 10 exercises to the document, with each string 
//of output going into its own list item. (There are a few ways to write this 
//solution, consideration given to methods that are more efficient - as long 
//as they're still readable and logical)

let eleOne = document.querySelector(`#ex1`)
eleOne.textContent = `You will be a ${jobTitle} in ${geoLocation}, making $${annualSalary} for ${companyName}.`

let eleTwo = document.querySelector(`#ex2`)
eleTwo.textContent = `They are ${age} years old.`

let eleThree = document.querySelector(`#ex3`)
eleThree.textContent = `If I eat ${perDay} snacks a day, I'll need ${totalSnacks} snacks to last me until the ripe old age of ${maxAge}.`

let eleFour = document.querySelector(`#ex4`)
eleFour.textContent = `The circumference is ${circumference}cm. The area is ${area}cm.`

let eleFive = document.querySelector(`#ex5`)
eleFive.textContent = `${fahrenheitTemp}°F is ${celciusTemp}°C and ${fahrenheitTemp}°F is ${celciusTemp}°C.`

let eleSix = document.querySelector(`#ex6`)
eleSix.textContent = `The square root of the number ${x} is ${squareNumber(6)}.`

let eleSeven = document.querySelector(`#ex7`)
eleSeven.textContent = `Half of 10 is ${halfNumber(10)}.`

//disclaimer i know i can assign a vars to the rest of these numbers (like i did in q6) but i just didn't 

let eleEight = document.querySelector(`#ex8`)
eleEight.textContent = `10 is ${percentOf(10,5)}% of 5.`

let eleNine = document.querySelector(`#ex9`)
eleNine.textContent = `The area for a circle with radius 7 is ${areaOfCircle(7).toFixed(2)}.`

let eleTen= document.querySelector(`#ex10`)
eleTen.textContent = runAll(10)
// figure out how to get the strings to transfer over

