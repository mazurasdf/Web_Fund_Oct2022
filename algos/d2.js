// var a = 25;
// a = a - 13;
// console.log(a/2);

// a = "hello";
// console.log(a + " hello");

//predict the output 2
// var i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }
// for(var i = 0; i < 10; i++){
//     console.log(i);
//     i = i + 3;
// }

// console.log("outside the loop: " + i);

// var arr = [4,8,15,16,23,42];
// console.log(arr[0]);

function getTotal(arrayOfNumbers) {

    var sum = 0;

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);

}

getTotal([1, 3, 5]);