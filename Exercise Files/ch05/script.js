const MYCONSTANT = 5;
console.log(MYCONSTANT);

//cannot do this as this is a constant.
//MYCONSTANT = 6;

function logScope() {
  let localVar = 4;
  console.log("I had this value", localVar);
  if (localVar) {
    let localVar = "I am changed inside the inner loop";
    console.log(localVar);
  }
  console.log("logScope localVar: ",localVar);

  var myarray = ["1","2","3"];
  console.log(myarray);
}


logScope();
