//boolean -> true false
// var isSunny = true;
// var temp = 55;
// var isRaining = false;
// var whatToBring = "I should bring: ";

const { count } = require("d3-array");

// if(isSunny){
//    whatToBring += "sunglasses, "; 
// }

// if(temp < 60){
//     whatToBring += "a light jacket, ";
// }

// if(isRaining){
//     whatToBring += "an umbrella, ";
// }

// whatToBring += "and a smile!";

// console.log(whatToBring);

//downcount
//loop goes from 10 to 0
// for(var i = 10; i > 0; i--){
//     if(i !== 2){
//         console.log(i);
//     }
//     else{
//         console.log("ignition!");
//     }
// }

// console.log("liftoff!");

var countPositives = 0;
var numbers = [6,2,-9,1,-4,0,100,83,8];

//YOUR CODE HERE

//this line should print out the correct number of positive integers
//in the numbers array
console.log("There are " + countPositives + " positives in the array");