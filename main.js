// 1: Values, Data Types, and Operations & 5: Building Arrays

//PSEUDOCODE:
// Define KEY variables with 2 arrays (contain chords within each KEY)

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

//EXPLANATION OF SKILL: VALUES, DATA TYPES, and OPERATIONS
//In the section above, I defined some variables with values.
// I did this by using "let" and "const" to initialize variables, named them using camelCase where the second word and after are capitalized,
//and then indicated their value with an equals sign "=".
//In the case above, I defined two variables with Arrays, and two variables with readline commands.
//I will explain ARRAYS in a section below.

//2: Stringing Characters Together

//PSEUDOCODE: Print user input back to user
console.log(
  `
  You chose "${selectedKeyArray}" for the key.
  
  These are the chords you will see: `
); //logging the key that was selected back to the user using a template literal to create the string. (STRINGING CHARACTERS TOGETHER,)

//EXPLANATION of SKILL: STRINGING CHARACTERS TOGETHER
//In this example above, I used a TEMPLATE LITERAL to put together a string.
// Template literals are indicated with backticks "`" and allow for the programmer to write in more "plain language" rather than having to navigate using single and double quotes and slashes.
//"${variable}" is used to denote where variables are used.
//This makes it more simple and easier to read.
// I will be using template literals continuing forward.

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
//EXPLANATION OF  SKILL: CONTROL STRUCTURES AND LOGIC
//In the section above, I created a control structure to use boolean logic to validate that the input the user gave is in the correct format.
//Using the variable "isValid", I created code that checked IF the user entered "C" or "G" in my limited application.
//IF it was either C or G, the "isValid" was strictly equal to true. which then meant it would assign the values in an array to a new variable to be used later in the code and it would bypass the loop.
//IF the user input was not C or G, then "isValid" was set to FALSE and I had the code indicate an error and then continue into a loop that would ask for user input until the user entered either "C" or "G"
//In this case, it was a if...else with another if...else nested within the else of the first control structure.
//

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

//EXPLANATION OF SKILL: WORKING WITH LOOPS
//In the section above, I used a while loop to follow up on the control structure before it.
//In this loop, I utlized the "isValid" varriable to check that the user input was acceptable.
//Much of the code is the same as the prior section, but it begins with the "while" loop to check if the input coming from the user was valid.
//I set "isvalid" in the prior set of code to either be true or false depending on if the user gave a valid input.
//If "isValid" is true, it bypasses the loop altogether because there is no need to reprompt the user for a valid input since one had already been provided.
//If "isValid" is false, it's because the user provided a invalid option for the key. Thus entering the while loop and continuing  until "isValid" is TRUE.
//Then, the code continues.

//5.Building Arrays &  6. Using Arrays

//PSEUDOCODE:
//Create Progression
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

//EXPLANATION OF SKILL: BUILDING ARRAYS
//In the section above, I created blank arrays to be filled by the for loop that follwed the initialization
//I created this by assigning the value "[]" to a variable.
//Then after using a loop to iterate through values in an array, I used .push to move those iterated items into a new array.
// I did this in both sections above here, one time to transform from music scale numbers to index values: 1654 to 0543,
//and then a second time to transform those index numbers into strings containing the musical chords "C" "Am" "G" "F"
//Also, at the very start of my code, I created some arrays manually by writing strings directly in square brackets seperated by commas. ["C", "D", ...etc]

//EXPLANATION OF SKILLS: USING ARRAYS
//In the section above, I used arrays to house the number values for the chords, and then i converted them to house string values of chords.
//I did this by writing a for loop that iterated through the incices of the first array, while then pushing the resulting values into a new array.
//then, in the second instance, I used one array and it's bracket notation to gain access to the contents within it to use those values AS the bracket index to print the desired chords.
// That looked like this: chordsArray.push(selectedKeyArray[progressionArray[j]]). It worked well, and gave me the results i was looking for, by providing the numbers in the array to dictate
//the strings that were then printed by the final console log.
//using a for loop to iterate throuhg those values took some time to get right, but in the end it worked well.

//The small appication DOES function :)
