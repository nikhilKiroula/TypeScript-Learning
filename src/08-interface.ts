// ! INTERFACE

// ? An interface defines the structure or shape that an object should follow.

// ? Interface ko object ka blueprint/structure samajh sakte hain.
// ? Ye define karta hai ki object ke andar kaunsi properties honi chahiye
// ? aur unke types kya hone chahiye.

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Nikhil",
  age: 22
};

console.log(user.name);
console.log(user.age);


// ! REQUIRED PROPERTIES

// ? Interface mein defined properties by default required hoti hain.

// const user2: User = {
//   name: "Rahul"
// };

// ❌ Error: `age` is required.


// ! OPTIONAL PROPERTIES

// ? Property ke baad `?` lagane se property optional ho jaati hai.

//  `?` → Property ho bhi sakti hai aur nahi bhi.

interface Customer {
  name: string;
  age: number;
  email?: string;
}

const customer1: Customer = {
  name: "Nikhil",
  age: 22
};

const customer2: Customer = {
  name: "Rahul",
  age: 25,
  email: "rahul@example.com"
};


// ! INTERFACE WITH METHOD

// ? Interface object ke methods/functions ka structure bhi define kar sakta hai.

interface Person {
  name: string;
  greet(): void;
}

const person: Person = {
  name: "Nikhil",

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};

person.greet();


// ! INTERFACE WITH FUNCTION PARAMETERS

// ? Interface ko function ke parameter ka type define karne ke liye bhi use kar sakte hain.

interface Product {
  id: number;
  name: string;
  price: number;
}

function printProduct(product: Product): void {
  console.log(product.name);
  console.log(product.price);
}

printProduct({
  id: 101,
  name: "Laptop",
  price: 50000
});


// ! INTERFACE EXTENDS

// ? One interface can extend another interface.

// `extends` ki help se ek interface doosre interface ki properties ko inherit kar sakta hai.

interface UserInfo {
  name: string;
  age: number;
}

interface Admin extends UserInfo {
  role: string;
}

const admin: Admin = {
  name: "Nikhil",
  age: 22,
  role: "admin"
};

console.log(admin.name);
console.log(admin.age);
console.log(admin.role);


// ! INTERFACE vs TYPE

// ? Both `interface` and `type` can be used to define object structures.

// Interface:

interface Student {
  name: string;
  age: number;
}

// Type:

type StudentType = {
  name: string;
  age: number;
};


// ! DECLARATION MERGING

// ? Interfaces with the same name are automatically merged by TypeScript.

interface Employee {
  name: string;
}

interface Employee {
  salary: number;
}

//  Both interfaces are merged.
//  Employee now has `name` and `salary`.

const employee: Employee = {
  name: "Nikhil",
  salary: 50000
};


// ! KEY POINTS

// ? Interface → Defines the structure/shape of an object.
// ? Required property → Property must be present.
// ? Optional property (`?`) → Property may or may not be present.
// ? Method → Interface can define function structure.
// ? `extends` → One interface can inherit another interface.
// ? Interface can also be used with function parameters.
// ? Interface supports declaration merging.

// ? Shortcut:
// ? Interface = Object ka blueprint / contract.




// ! READONLY PROPERTY

// ? `readonly` makes a property read-only.
// ? Once the value is assigned, it cannot be changed later.

//  Property ko create karte time value de sakte hain,
//  lekin baad mein uski value change nahi kar sakte.

interface Personn {
  readonly username: string;
  age: number;
}

const person1: Personn = {
  username: "Nikhil",
  age: 21
};

// person1.name = "Rahul"; // ❌ Cannot assign to 'name' because it is readonly.

person1.age = 22; // ✅ Allowed