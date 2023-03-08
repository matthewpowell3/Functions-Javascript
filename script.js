// Functions Javascript

// function sum(x, y) {
//   var total = x + y;

//   document.write(total);
// }

// sum(15, 2);

// can't use variables defined inside a function

// document.write(total);

function sum(x, y) {
  var total = x + y;
  // use return to make it globe not local inside the function
  return total;
}

var output = sum(35, 40);
document.write(output);
