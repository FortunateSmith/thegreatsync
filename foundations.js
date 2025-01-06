/*
  These are primitives: 
    They cannot be mutated 
    Their vaules are unique 
    They have a location in memory
*/

/* 
  Number - Ice islands (num-bum)
    Integers, including decimals
    NaN and Infinity are number primitives
*/
let age = 25;
let price = 9.99;

/* 
  Strings - Rainy islands with lots of  "" ''' ```
*/
let name = "John Doe";
let message = 'Hello, world!';
let strObj = '{}';

/*
  Boolean - Island is half on fire. Either you are on fire or not
*/
let isStudent = true;
let hasCar = false;

/* 
  Null - sparse, desert island
    Value is empty
*/ 
let result = null;

/*
  Undefined - lack of difinition, hazy with plumes of smoke to be easily identifiable, lava-filled volcanic mess
    All variables start off pointing at undefined
    Undefined is easy for genies to find when they cannot find the existing value    
*/
let firstName;
let lastName = undefined;

/* 
  Symbol - think "uniqueness"
    Nemo in an anemone in his tank on a toilet bowl
    A unique and immutable primitive data type that can be used as an object property key
    Used as identifiers of object properties, to stop properties being overridden
*/
const data = {
  [Symbol('name')]  : 'Nemo', 
   name: 'Finding Nemo', 
};

/* 
  BigInt - for numbers that exceed largest Number primitive that javascript allows for
*/
let largeNumber = BigInt("9007199254740991");
let anotherLargeNumber = BigInt(12345678901234567890n);

/////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Variables - Blue Genie Bums
    purpose of variable is to store value for reuse
    genies that point to values (const genieOne = 'burger', let genieTwo = 7)
    we assign variables to values
    we tell the genie to sit his ASS(ign) on th toilet on a given island
*/
const obj = {};

/*
  when using genie's name we are asking "Where is this genie located?"
  The Memory Tower is where the question is directed
    It stores data with boxes inside
    Each box has two pieces of info:
      The name of the genie and the coordinates
      If the name exists, the tower points its scope (or light) at the island
    As long as variable is in "scope"
    Else "undefined"
*/
obj;

/*
  STATEMENTS
  Declarations - a statement (statesman) announcing the existence of a variable genie and its location
    The statesman shouts LET or CONST or VAR to add the variables name to the NAMESPACE
*/