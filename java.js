// // A local gym wants to implement an "exercise of the day" program where there is a free class for that day that promotes a certain exercise. The gym needs some backend logic to update its system to reflect which exercise will be promoted that day. Write a function that will take as an input the name of an exercise and console log a message like Today's exercise: running
//  Write one function that can dynamically print the value of the exercise for that day, and it must be closure.
//  // Output: Today's exercise: Running
//    console.log(exercise("Running")); 
//  // Output: Today's exercise: Swimming
//    console.log(exercise("Swimming"));
//  // Output: Today's exercise: Dancing
//    console.log(exercise("Dancing")); 
//  // Output: Today's exercise: Fencing
//    console.log(exercise("Fencing")); 
 

function exerciseToday(){

  let todayExercise = "";

function setExercise(exercise){ // Using this function to set the exercise of the day
  todayExercise = exercise;
}

function getExercise(){
  console.log (`Todays exercise: ${todayExercise}`);
}

return{
  setExercise: setExercise,
  getExercise:getExercise
};
}

const programExercise = exerciseToday();

programExercise.setExercise("running");

programExercise.getExercise();

// MEDIUM: 
// Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly. 
// The function should return an interpolated string like Each person gets 4.00 slices of pizza; 
// from our 8-slice pizza x being a decimal in case there is no way to split the pizza evenly.
// // Output: Each person gets 4 slices of pizza; from our 8 slice pizza
//   console.log(sharePizza(8, 2)); 
// // Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
//   console.log(sharePizza(8, 3)); 
// // Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
//   console.log(sharePizza(21, 20));
// // Output:Each person gets 3.33 slices of pizza; from our 10 slice pizza
//   console.log(sharePizza(10, 3)); 

function calculateSlices(slices,people) {

  const calculation = slices / people;

  return `Each person gets ${calculation} slices of pizza: from our ${slices} slice pizza.`
}

console.log(calculateSlices(8,2));

// HARD:
// Inside a closure, create an object called PII (Personally Identifiable Information)
// that cannot be accessed directly. 
// The object should have at least two properties: name and SSN. 
// Only the name property should be accessible, and it should be called through a public function. 
// The SSN property should not be accessible at all. 
// Creating private objects and private properties helps you control who has access to what data and helps 
// you prevent people who shouldn't see important info 
// like social security numbers from getting access to the data. 
// You can use 'getName' or other get methods to access data that people might need. 
// For example, people addressing a package or email may need a customer's name,
//  but they definitely shouldn't have access to their SSN.
// // Output: Undefined
//   console.log(patient2.names); 
// // Output: Undefined
//   console.log(patient2.ssn); 
// // Output: John
//   console.log(patient2.getName());
// // Output: 123-45-6789
//   console.log(patient2.getSSN()); 

const PII = (function(){ //Have to create a closure with PII and then store name and SSN in privateDAta object so the SSN can be private

  const privateData = {
    name: "Terry Crews",
    SSN: "123-45-6789"
  };
// Get name is a public function which allows the object name to be retrieved from privateData
  function getName(){
    return privateData.name;
  }

  return{
    getName:getName
  };
})();

console.log(PII.getName());
// Can't retrieve SSN directly outside of a closure
console.log(PII.SSN);

