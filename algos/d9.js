// var arr2d = [
//     [2,5,8,4],
//     [3,6,1],
//     [5,7,7,1],
//     [3,3]
// ];

// // console.log(arr2d[1]);
// for(var i = 0; i < arr2d.length; i++){
//     // console.log(arr2d[i]);
//     for(var j = 0; j < arr2d[i].length; j++){
//         console.log(arr2d[i][j]);
//     }
// }

function flatten(arr2d){
    //built out a new 1 dimensional array with all arr2d values
    var flat = [];
    //YOUR CODE HERE
    return flat;
}

var arr2d2 = [
    [4,7,1],
    [5,-8,2,1,7],
    [3,79]
];
console.log(flatten(arr2d2));//should print out [4,7,1,5,-8,2,1,7,3,79]

//should return true if value exists in arr2d
//return false if it is not present
function isPresent2d(arr2d, value){

}
console.log(isPresent2d(arr2d2, 3));//should return true
console.log(isPresent2d(arr2d2, 0));//should return false