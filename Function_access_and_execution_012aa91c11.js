// Each function has to be executed twice. Once to have a new function returned, 
// which contains the console.log statemennt. And once to execute the returned function.

for (let i = 0; i < ar.length; i++){
    ar[i]()();
};

// Using an array iterator
ar.forEach(fn => fn()())

//Individually
ar[0]()();
ar[1]()();
ar[2]()();

//It can also be easier to save the first function into a variable:
const declarationFn = ar[0];
const expressionFn = ar[1];
const methodFn = ar[2];

//And now invoke them
declarationFn();
expressionFn();
methodFn();