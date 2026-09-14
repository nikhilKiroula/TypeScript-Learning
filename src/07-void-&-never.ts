// ! VOID TYPE

// ? `void` represents the return type of a function that does not return a value.

// ? Simple:
// ? Function kaam karta hai, lekin koi value return nahi karta.

function greet(name: string): void {
  console.log(`Hello ${name}`);
}

greet("Nikhil");


function greeting(name: string) {
  console.log(`Hello ${name}`);
  return
}

greeting("Nikhil");

// here type of both functions(greet(), greeting()) is void
// ? `void` → function does not return a value.



// ! NEVER TYPE

// ? `never` represents a value that never occurs.

// ? Simple:
// ? Aisa function jo normally kabhi return nahi karta.

// ? Example: Function throws an error

function throwError(message: string): never {
  throw new Error(message);
}

throwError("Something went wrong");

// here function throwError() never returns a value
// it throws error and stops the execution


// ? Example: infinite loop

function infiniteLoop(): never {
  while (true) {
    console.log("Running...");
  }
}

infiniteLoop();

// here function infiniteLoop() never returns a value
// the loop keeps running infinitely

// ? `never` → function never returns normally.


// ! VOID VS NEVER

// ? void  → Function completes but returns no value.
// ? never → Function never returns normally.

// ? void  → "Return nahi karunga."
// ? never → "Normally return hi nahi karunga."