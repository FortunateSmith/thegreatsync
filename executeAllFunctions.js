function funcDeclaration() {
    return function() {
        console.log("This is a function declaration");
    }
}

const arrowFunction = () => {
    return () => {
        console.log("This is an arrow function");
    }
}

const obj = {
    objectMethod: function() {
        return function() {
          console.log("This is an object method");
        }
    }
}

const ar = [ funcDeclaration, arrowFunction, obj.objectMethod ];

// let i;
// while (i < ar.length) {
//     let functionCall = ar[i]();
//     return functionCall();
// }

for (let item of ar) {
    let functionCall = item();
    functionCall();
}

// let arr0 = ar[0]();
// let arr1 = ar[1]();
// let arr2 = ar[2]();
// arr0();
// arr1();
// arr2();