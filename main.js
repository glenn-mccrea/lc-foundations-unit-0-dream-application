// 1: Values, Data Types, and Operations & 5: Building Arrays

//PSEUDOCODE:
// Define KEY variable with array (contain chords within each KEY)

let keyChordsG = ["G", "Am", "Bm", "C", "D", "Em", "F#dim"];
// Defining a variable, Naming a variable using camelCase, and building an array containing Strings. (VARIABLES, NAMING CONVENTION, BUILDING AN ARRAY, DATA TYPE STRING, STRINGING CHARACTERS TOGETHER)
let keyChordsC = ["C", "Dm", "Em", "F", "G", "Am", "Bdim"]; // Same as above.
console.log(`Chords in C: ${keyChordsC}
Chords in G: ${keyChordsG}
    `); // Logging the chords in the 2 keys, using a template literal to create a string to print back to the user. (DATA TPYE STRINGS, VARIABLES/VALUES, TEMPLATE LITERAL)

//PSUEDOCODE: Prompt user to select a music key
const readline = require("readline-sync");
//Including readline to enable the ability to prompt the user for input in the terminal, defining a constant variable. (DATA TYPE, OPERATION(READLINE), VARIABLE/VALUE)
let selectedKeyArray = readline.question(
  `Please select the key for the song - 'G' or 'C':`
); // Defining a variable, Naming a variable using camelCase, and prompting the user for input with a string to select the key. (DATA TYPES, VARIABLES/VALUES, USER INPUT, STRINGING CHARACTERS)

//2: Stringing Characters Together

//PSEUDOCODE: Print user input back to user
console.log(
  `
  You chose "${selectedKeyArray}" for the key.
  
  These are the chords you will see: `
); //logging the key that was selected back to the user using a template literal to create the string. (STRINGING CHARACTERS TOGETHER,)

//3: Control Structures and Logic

//PSEUDOCODE:
//Initialize a validation variable
// IF key is 'C' Validation is TRUE and Chords are: 'C' SKIP LOOP
//ELSE IF key is 'G' Validation is TRUE and Chords are: 'G' SKIP LOOP
//ELSE IF key is not 'G' or 'C', Validation is FALSE
//indicate error
//Ask user to try again

let isValid; // initializing a variable to use for validation checking. (VARIABLE/VALUE)
if (selectedKeyArray === "C") {
  //(OPERATIONS(===))
  //Starting an if else, with a nested if else. to set the Key Chords and to validate an acceptable answer. (CONTROL STRUCTURE and LOGIC)
  selectedKeyArray = keyChordsC; //Assigning  the selected key to use the array for the chords in C (VARIABLES/VALUES, NAMING CONVENTION)
  isValid = true; //Setting the Validation Check -- (BOOLEAN OPERATION,VARIABLE/VALUE)
  console.log(selectedKeyArray); //logging the key that was selected back to the user. This also shows that the variable value is now an array.
} else {
  //Continuing the Control structure (CONTROL STRUCTURE AND LOGIC)
  if (selectedKeyArray === "G") {
    //(OPERATIONS)
    selectedKeyArray = keyChordsG; //Assigning  the selected key to use the array for the chords in G (VARIABLES/VALUES, NAMING CONVENTION)
    isValid = true; //Setting the Validation Check -- (BOOLEAN OPERATION,VARIABLE/VALUE)
    console.log(selectedKeyArray); //logging the key that was selected back to the user. This also shows that the variable value is now an array. (USING ARRAYS)
  } else {
    //Continuing the Control structure (CONTROL STRUCTURE)
    isValid = false; // if the key is not G or C, then it sets the validation check to FALSE (BOOLEAN OPERATION)
    console.log(`***ERROR -- allowed input = ${isValid}***
        `); // logging back to the user that this is not a valid answer, using a template literal. (STRINGING CHARACTERS TOGETHER, VARIABLES AND VALUES)
  }
}
// 4: WORKING WITH LOOPS
//PSEUDOCODE:
// Start loop.
// Loop WHILE input validation is FALSE.
// IF key is G use the G chords array
// IF C, use the C chords array.
// Validate that it is either G or C
// IF not G or C show error and loop back

while (isValid === false) {
  // LOOPING while the validation from the code above is false. If the user inputs an acceptable key initially, we skip this loop. (WORKING WITH LOOPS, OPERATIONS(===))
  let selectedKeyArray = readline.question(
    "Please select the key for the song - 'G' or 'C':"
  ); // Defining a variable, Naming a variable using camelCase, and prompting the user for input with a string. (VARIABLES/VALUES, STRINGING CHARACTERS TOGETHER)

  console.log(
    `You chose "${selectedKeyArray}" for the key. These are the chords you will see: `
  ); //logging the key that was selected back to the user using a template literal to create the string.
  if (selectedKeyArray === "C") {
    //(OPERATIONS)
    //Starting an if else, with a nested if else. to set the Key Chords and to validate an acceptable answer. (CONTROL STRUCTURE)
    selectedKeyArray = keyChordsC; //Assigning  the selected key to use the array for the chords in C (VARIABLES/VALUES, NAMING CONVENTION)
    isValid = true; //Setting the Validation Check -- (BOOLEAN OPERATION,VARIABLE/VALUE)
    console.log(selectedKeyArray); //logging the key that was selected back to the user. This also shows that the variable value is now an array.
  } else {
    //Continuing the Control structure (CONTROL STRUCTURE)
    if (selectedKeyArray === "G") {
      //(OPERATIONS)
      selectedKeyArray = keyChordsG; //Assigning  the selected key to use the array for the chords in G (VARIABLES/VALUES, NAMING CONVENTION)
      isValid = true; //Setting the Validation Check -- (BOOLEAN OPERATION,VARIABLE/VALUE)
      console.log(selectedKeyArray); //logging the key that was selected back to the user. This also shows that the variable value is now an array. (USING ARRAYS)
    } else {
      //Continuing the Control structure (CONTROL STRUCTURE)
      isValid = false; // if the key is not G or C, then it sets the validation check to FALSE (BOOLEAN OPERATION)
      console.log(`***ERROR -- allowed input = ${isValid}***
        `); // logging back to the user that this is not a valid answer, using a template literal. (STRINGING CHARACTERS TOGETHER, VARIABLES AND VALUES)
    }
  }
}

//6. Using Arrays

//Analyze progression
//Convert string with spaces to a string without spaces
//Create a blank array
//LOOP through each character of the compressed string
//Convert each string into a number
//Subtract 1 from the number to arrive at index values
//PUSH the numbers to the blank array
//Log the index numbers
//Create another blank array
//iterate through bracket notation of the index number above
//Fill in the selected key strings
//log final chord output.

let chordProgression = "1  6  5  4"; // a made up value for a chord progression that could be gathered from the number chart that the user inputs. (VALUES AND VARIABLES, STRINGING CHARACTERS TOGETHER,)
let compProgression = chordProgression.split(" ").join(""); // removing the spaces in the string above (OPERATIONS, VALUES AND VARIABLES, METHODS)

let progressionArray = []; //Creating a BLANK array (USING ARRAYS, CREATING ARRAYS)
for (let i = 0; i < compProgression.length; i++) {
  // using a for loop to iterate through each of the Characters in the compProgression variable. (USING LOOPS, VARIABLES/VALUES, OPERATIONS)
  let num = compProgression[i] - "0"; // convert string to number with implicit conversion (OPERATIONS)
  let numMinus = num - 1; //creating  a new variable to reduce the number in the number chart by one so that they match the index values (OPERATIONS, ARITHMETIC,)
  progressionArray.push(numMinus); //filling the blank array with the numbers 0 5 4 3 (USING ARRAYS)
}
console.log(`Index Values = ${progressionArray}`); //Confirming that the numbers were matched to the index value. (STRINGING CHARACTERS TOGETHER)

let chordsArray = []; //Creating another blank array (BUILDING ARRAYS, USING ARRAYS)
for (let j = 0; j < progressionArray.length; j++) {
  //LOOPING through the progression array to create the string values for the chords based off the numbners (WORKING WITH LOOPS, WORKING WITH ARRAYS)
  chordsArray.push(selectedKeyArray[progressionArray[j]]); // Pushing the values created with the loop into the array so that it outputs the "String" Chords based on the indexed numbers in the previous array.(WORKING WITH ARRAYS)
}
console.log(chordsArray); //LOGGING THE FINAL OUTPUT
