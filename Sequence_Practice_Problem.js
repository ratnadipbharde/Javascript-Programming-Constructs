
console.log("get single number using Random Function : " + getSingleDigit());
console.log("get Dice Number between 1 to 6 : " + randomNumberBetween(1, 6))
let a = 3;
let b = 5;
console.log("Add two Random Dice Number :" + a + " + " + b + " = " + additionTwoRandomDiceNumber(a, b))
console.log(findSumAndAverage());
console.log("42 inch :" + inchToFeet(42) + " Feet")
let length = 60;
let breadth = 40;
let plotInMeter = claculateRectangularPlotInMeter(length, breadth);
console.log(length + " feet x" + breadth + " feet : " + plotInMeter);
console.log("area of 25 such plots in acres : " + meterToAcre(plotInMeter * 25) + " acres");

const prompt = require("prompt-sync")();
var number = prompt("Enter Number for digit to word : ");
console.log(digitToWord(number));

var dayNumber = prompt("Enter Number for get day in week : ");
console.log(digitToDay(dayNumber));

var unitNumber = prompt("Enter Number for get Unit : ");
console.log(getUnit(unitNumber));

var number1 = prompt("Enter value for a : ");
var number2 = prompt("Enter  value for b : ");
var number3 = prompt("Enter  value for c : ");
console.log(arthmaticOpration(number1,number2,number3));

function getSingleDigit() {
    return Math.floor(Math.random() * 10);
}

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function additionTwoRandomDiceNumber(first, second) {
    return first + second;
}

function findSumAndAverage() {
    let a = Math.floor(Math.random() * 90 + 10);
    let b = Math.floor(Math.random() * 90 + 10);
    let c = Math.floor(Math.random() * 90 + 10);
    let d = Math.floor(Math.random() * 90 + 10);
    let e = Math.floor(Math.random() * 90 + 10);
    let sum = a + b + c + d + e;
    console.log("Sum is : " + sum);
    console.log("Average is : " + sum / 5);
}

function inchToFeet(inch) {
    return feet = inch / 12;
}

function claculateRectangularPlotInMeter(lengthInFeet, breadthInFeet) {
    return ((lengthInFeet / 3.28084) * (breadthInFeet / 3.28084));
}

function meterToAcre(meter) {
    return meter / 4046.86
}

function digitToWord(number) {
    if (number == 1) return "One";
    if (number == 2) return "Two";
    if (number == 3) return "Three";
    if (number == 4) return "Four";
    if (number == 5) return "Five";
    if (number == 6) return "Six";
    if (number == 7) return "Seven";
    if (number == 8) return "Eight";
    if (number == 9) return "Nine";
    if (number == 0) return "zero";
}

function digitToDay(number) {
    if (number == 1) return "Sunday";
    if (number == 2) return "Monday";
    if (number == 3) return "Tuesday";
    if (number == 4) return "Wednesday";
    if (number == 5) return "Thursday";
    if (number == 6) return "Friday";
    if (number == 6) return "Saturday";
}

function getUnit(number) {
    if (number == 1) return "One";
    if (number == 10) return "Ten";
    if (number == 100) return "Hundred";
    if (number == 1000) return "Thousnd";
}

function arthmaticOpration(a,b,c) {
    var result1 = a + b * c;
    var result2 = a % b + c;
    var result3 = c + a / b;
    var result4 = a * b + c;
    console.log("(a). a + b * c = "+result1);
    console.log("(b). a % b + c = "+result2);
    console.log("(c). c + a / b = "+result3);
    console.log("(d). a * b + c = "+result4);
    var max=Math.max(Math.max(Math.max(result1,result2),result3),result4);
    var min=Math.min(Math.min(Math.min(result1,result2),result3),result4);
    console.log("Max : " + max);
    console.log("Min : " + min);  
}