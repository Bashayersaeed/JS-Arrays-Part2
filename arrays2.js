


// TASK 1///** * isArrayLengthOdd(numbers):
// * - receives array `numbers`
// * - returns true if array has an odd number of elements
// * - returns false otherwise
// *
// * e.g.
// * isArrayLengthOdd([1, 2, 3]) -> true
// * isArrayLengthOdd([1, 2, 3, 4]) -> flase
// */
//  // Your code here

function isArrayLengthOdd(numbers) {
const sizeOfArray = numbers.lenght;
if (sizeOfArray %2) {
    return true;
} else {
    return false;
}
}
console.log (isArrayLengthOdd([1, 2, 3,4]));

/** TASK 2
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
// Your code here

function isArrayLengthEven(numbers) {
const sizeOfArray = numbers.lenght;
if (sizeOfArray %2) {
    return false;
} else {
    return true;
}
  }
  console.log(isArrayLengthEven([1, 2, 3, 4]));

  /** TASK 3
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
const testarray = ["Mshary", "Hasan"];
function addLailaToArray(instructors) {
    // Your code here
    // copy aaray instructors
    // add "laila" to array
    // return new array

    const newInstructors = instructors;
    newInstructors.push("Laila");
    return newInstructors;

  }
  console.log(addLailaToArray(["Mshary", "Hasan"]));

  // Task 4
  function eliminateTeam(teams){
    const lastTeam = teams.pop();
    return lastTeam;
  }
console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

//Challange 1
function secondHalfOfArrayIfItIsEven(fruits) {
if (isArrayLengthEven(fruits)){
        return fruits.slice (2,4);
  }
}
console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));

//challenge 1
function secondHalfOfArrayIfItIsEven(fruits) {
   if (isArrayLengthEven(fruits)){
           return fruits.slice (fruits.lenght /2, fruits.lenght);
       }
   }
    console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi","baries","strawbary"]));

// //Challenge 2
function youGottaCalmDown(shout){
    If (shout[shout.length-1] !=="!") {
      return shout;
    }
  const ShoutWithOneMArk= shout.slice (0, shout.indexOf("!") + 1);
  return ShoutWithOneMArk;
}
console.log (youGottaCalmDown("Hello!!!!!!!"));