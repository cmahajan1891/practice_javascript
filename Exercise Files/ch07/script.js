function doSomeMath() {
	var a = 5;
	var b = 4;
	var sum = a + b;

	return sum;
}

var theResult = doSomeMath();

console.log("The result: ", theResult);

//Defining a function to make use of the closure.
function solveExpression(pixels){
	var baseValue = 16;

	function calculatedValue(){
		return pixels/baseValue;
	}

	return calculatedValue();
}

var small = solveExpression(32);
var large = solveExpression(64);

console.log("The small value is ", small);
console.log("The large value is ", large);
