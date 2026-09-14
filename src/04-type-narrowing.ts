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
// The `in` operator checks whether a specific property exists in an object and helps TypeScript narrow the type.

function checkUser(user: { name: string } | { name: string; age: number }) {

  if ("age" in user) {
    // ? TypeScript knows that `user` has an age property here.
    console.log(`Age: ${user.age}`);
  } else {
    console.log(`Name: ${user.name}`);
  }

}

checkUser({ name: "Nikhil", age: 22 });
checkUser({ name: "Rahul" });


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


// ? Custom Type Guard
//  A custom type guard is a function that checks a value's type
//  and tells TypeScript its specific type when it returns true.

//  A type predicate (`value is Type` here "obj is ChaiOrder") is used to tell TypeScript
//  the specific type when the function returns true.

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "type" in obj &&
    "sugar" in obj &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    // ? item is narrowed to ChaiOrder here.
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }

  // ? item is narrowed to string here.
  return `Serving custom chai: ${item}`;
}

//  Custom Type Guard = Our own type-checking function.
//  `value is User` = Type Predicate.


