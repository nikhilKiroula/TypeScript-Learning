// ! OBJECTS IN TYPESCRIPT

// ? 1. OBJECT TYPE ANNOTATION

// Definition:
// Object Type Annotation means explicitly defining the structure
// and types of an object.

// Simple:
// Hum TypeScript ko khud batate hain ki object ke andar
// kaunsi properties hongi aur unka type kya hoga.

const user: { name: string; age: number } = {
  name: "Nikhil",
  age: 23,
};
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

// ? 2. OBJECT TYPE INFERENCE

// Definition:
// TypeScript automatically determines the type of an object
// based on the values assigned to its properties.

// Simple:
// Hume manually type define karne ki zarurat nahi hoti.
// TypeScript khud object ka structure samajh leta hai.

const person = {
  name: "Abhishek",
  age: 23,
};

// TypeScript infers:
// name → string
// age  → number

// ? 3. OPTIONAL OBJECT PROPERTY

// Definition:
// An optional property may or may not be present in an object.

// Simple:
// Property ke naam ke baad `?` lagane se wo optional ho jaati hai.

const user1: { name: string; age?: number } = {
  name: "Nikhil",
  // age:23      -- age is optional here
};

// `age?: number` means:
// age can be a number or it can be absent.

// ? 4. READONLY OBJECT PROPERTY

// Definition:
// `readonly` prevents a property from being changed
// after the object has been created.

// Simple:
// Property ko initial value de sakte hain,
// lekin baad mein uski value change nahi kar sakte.

const user2: { readonly id: number; name: string } = {
  id: 101,
  name: "Nikhil",
};

user2.name = "Rahul"; // ✅ allowed

// user2.id = 102;   ❌ not allowed because id is readonly

// ? 5. NESTED OBJECTS

//  Definition:
//  A nested object is an object that contains another object
//  as one of its properties.

//  Simple:
//  Object ke andar ek aur object.

const user3: {
  name: string;
  age: number;
  address: {
    city: string;
    pincode: number;
  };
} = {
  name: "Nikhil",
  age: 23,
  address: {
    city: "Ranikhet",
    pincode: 263645,
  },
};

// ? Accessing nested properties:

// console.log(user3.address.city);
// console.log(user3.address.pincode);

// ? 6. OBJECT METHODS IN TYPESCRIPT

// Definition:
// A method is a function defined inside an object.

// Simple:
// Object ke andar function ko method kehte hain.

const user4: {
  name: string;
  greet(): void;
} = {
  name: "Nikhil",

  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
};

user4.greet();

// `greet(): void` means:
// greet is a method that does not return a value.

// `this` refers to the current object.
// Here, `this` refers to `user4`.

// ? METHOD WITH PARAMETERS

const calculator: {
  add(num1: number, num2: number): number;
} = {
  add(num1, num2) {
    return num1 + num2;
  },
};

calculator.add(10, 20);

// `add()` takes two numbers and returns a number.

// ? ARROW FUNCTION AS OBJECT PROPERTY

// An object property can also contain an arrow function.

const calc: {
  multiply: (a: number, b: number) => number;
} = {
  multiply: (a, b) => a * b,
};

calc.multiply(2, 3);

// `multiply` is a function property.
// It takes two numbers and returns a number.

// ? 8. TYPE ALIAS WITH OBJECTS

// Definition:
// A Type Alias allows us to give a name to an object type.

// Simple:
// Object ke structure ko ek naam de sakte hain
// aur us structure ko multiple places par reuse kar sakte hain.

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "tea leaves", "water"],
};

const elaichiChai: Tea = {
  name: "Elaichi Chai",
  price: 20,
  ingredients: ["elaichi", "tea leaves", "water"],
};

// Both objects follow the same `Tea` structure.

// ? 9. INTERFACE WITH OBJECTS

// Definition:
// An interface defines the structure or shape
// that an object should follow.

// Simple:
// Interface object ka blueprint/contract hota hai.

interface Users {
  name: string;
  age: number;
}

const user5: Users = {
  name: "Nikhil",
  age: 23,
};

// `user5` must follow the `Users` interface structure.

// ? INTERFACE EXTENDS

// One interface can extend another interface.
// The child interface gets the properties of the parent interface.

interface Admin extends Users {
  role: string;
}

const admin: Admin = {
  name: "Abhishek",
  age: 23,
  role: "admin",
};

// `Admin` gets:
// name → from Users
// age  → from Users
// role → its own property

// ? 10. INDEX SIGNATURE

// Definition:
// An Index Signature defines the type of keys and values
// that an object can have when the keys are not known in advance.

// Simple:
// Jab object ki keys pehle se fixed/known nahi hoti,
// tab Index Signature use kar sakte hain.

const users: {
  [key: string]: string;
} = {
  user1: "Nikhil",
  user2: "Rahul",
  user3: "Aman",
};

// `[key: string]: string` means:
// Key → string
// Value → string

users["user4"] = "Rohit"; // ✅

// users["user5"] = 100; // ❌ value must be string

// ? REAL-WORLD EXAMPLE

const prices: {
  [productName: string]: number;
} = {
  laptop: 50000,
  phone: 25000,
  keyboard: 2000,
};

prices["mouse"] = 800;
prices["monitor"] = 15000;

// Here:
// Product name → string
// Price → number


// ? 11. STRUCTURAL TYPING

// Definition:
// TypeScript checks the structure of an object to determine
// whether it is compatible with another type.

// Simple:
// TypeScript object ka naam nahi, balki uske structure/properties ko check karta hai.

type Cup = {
  size: string;
};

let smallCup: Cup = {
  size: "200ml",
};

let bigCup = {
  size: "500ml",
  material: "steel",
};

// `bigCup` has the required `size` property
// and also has an extra `material` property.

smallCup = bigCup; // ✅ Allowed

// ? Why?
// `Cup` requires: size → string
// `bigCup` has: size → string, material → string

// Extra properties do not cause a problem when assigning an existing object variable.

// ? Key Point:
// ? Structural Typing → If an object's structure matches the
// ? required structure, TypeScript considers it compatible.



// ! KEY POINTS

// ? Object Type Annotation → We explicitly define object structure.
// ? Object Type Inference → TypeScript automatically infers object structure.
// ? Optional Property (`?`) → Property may or may not exist.
// ? Readonly → Property cannot be reassigned.
// ? Nested Object → Object inside another object.
// ? Object Method → Function inside an object.
// ? Type Alias → Gives a reusable name to an object type.
// ? Interface → Defines the structure/blueprint of an object.
// ? `extends` → Allows one interface to inherit another interface.
// ? Index Signature → Used when object keys are dynamic/unknown.
