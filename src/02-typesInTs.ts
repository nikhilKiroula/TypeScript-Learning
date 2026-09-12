//  ! Type Inference
// ? Type Inference is the ability of TypeScript to automatically determine the type of a variable or expression based on its value or context.

let drink = "coffee";
drink = "water";   // ✅
// drink = 1     ❌ --Type 'number' is not assignable to type 'string'.

let total = Math.random() > 0.5 ? 10 : 5;
// total="21"   ❌ --Type 'string' is not assignable to type 'number'.


// ! Type Annotation
// ? Type annotation is the process of explicitly specifying the type, of a variable, parameter, or return value in TypeScript

let isMarried: boolean = false;

let age: number = 21;  

// Function parameter with type annotation
function greet(name: string) {
    return `Hello, ${name}`;
}

// Function return with type annotation
function add(a: number, b: number): number {
    return a + b;
}
