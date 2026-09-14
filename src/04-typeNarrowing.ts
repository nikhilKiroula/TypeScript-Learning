// ! Type Narrowing

//  Type  Narrowing is the process of reducing a variable from a broader type to a more specific type using checks or conditions

//? typeof Narrowing

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}


//? Array.isArray()  Narrowing

function process(data: string | string[]) {

  if (Array.isArray(data)) {
    // data → string[]
    console.log(data.length);
  } else {
    // data → string
    console.log(data.toUpperCase());
  }

}

//? in operator Narrowing

// An interface defines the structure or shape that an object should follow.
interface Admin {
  name: string;
  permissions: string[];
}

interface User {
  name: string;
}

function showUser(user: Admin | User) {
  if ("permissions" in user) {
    console.log(user.permissions);
  } else {
    console.log(user.name);
  }
}


//? Truthiness Narrowing
// Truthiness Narrowing means checking whether a value is truthy or falsy to narrow down its type.
// It checks if a value exists or is truthy, and then TypeScript narrows its type.

function greet(userName?:string){
  if(userName)
    return `Hello ${userName}`

  return `Hello User`
}


//? instanceof Narrowing
//  instanceof checks whether an object belongs to a specific class.

class Dog {
  bark() {
    console.log("Woof");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}



//? TYPE ALIAS

// A Type Alias allows us to give a name to a type or a combination of types.

type Username = string;

let name: Username = "Nikhil";


//? UNION WITH TYPE ALIAS

// A type alias can also represent multiple possible types using `|`.

// `|` means OR.

type ID = string | number;

let userId: ID = 101;
userId = "USER101";

//? LITERAL TYPES

// A Literal Type represents one specific, exact value instead of a general type.

let status: "success";

status = "success"; // ✅
// status = "error"; // ❌

// Multiple Literal Types can be combined using a Union.

type PaymentStatus = "pending" | "success" | "failed";

let paymentStatus: PaymentStatus;

paymentStatus = "pending"; // ✅
paymentStatus = "success"; // ✅
paymentStatus = "failed";  // ✅

// paymentStatus = "completed"; // ❌

//? DISCRIMINATED UNION

// A Discriminated Union is a union of object types that share a common
// property called a discriminant, which is used to identify and narrow
// down the specific type.

type Result =
| { status: "success"; data: string }
| { status: "error"; message: string };

// `|` means OR.
// `status` is the discriminant property.
// "success" and "error" are Literal Types.

function handleResult(result: Result) {
if (result.status === "success") {
// TypeScript narrows `result` to the success type.
console.log(result.data);
} else {
// TypeScript narrows `result` to the error type.
console.log(result.message);
}
}

// ! EXAMPLE

handleResult({
status: "success",
data: "User found"
});

handleResult({
status: "error",
message: "User not found"
});

// ! KEY POINTS

// ? Type Alias → Gives a name to a type.
// ? Union (`|`) → Allows one of multiple types.
// ? Literal Type → Allows one specific, exact value.
// ? Discriminated Union → Uses a common property to identify the exact type.
// ? Type Narrowing → The `if` condition narrows the type.
