// function findBiggestFraction() {
// console.log("The function is running.");
//   a>b ? console.log("a: ",a) : console.log("b: ",b);
// }
// var a = 3/4;
// var b = 5/7;

// findBiggestFraction();




// findBiggestFraction(a,b) {
//   a>b ? console.log("a: ",a) : console.log("b: ",b);
// }

// function findBiggestFraction(firstF, secondF){
//   var result;
//   a>b ? result = ["firstF: ", a] : result = ["secondF: ", b];
//   return result;
// }
//
// var a = 3/4;
// var b = 5/7;
//
// var fracR = findBiggestFraction(a,b);
// //console.log(fracR);
//
// console.log("firstF: ", a);
// console.log("secondF: ", b);
// console.log("Fraction Result:", fracR[0] + "with a value of " + fracR[1] + " is the biggest.");


// var a = 5/7;
// var b = 18/25;
//
// var biggest = function() {
//   var result;
//   a>b ? result = ["a:", a]: result = ["b:", b];
//   console.log("Biggest: " + result);
// }
//
// biggest();

var big = (function(a,b){
var result;
a>b ? result = ["a:", a]: result = ["b:", b];
//console.log("Biggest: " + result);
return result;
})(7/9, 13/25);

console.log(big);
