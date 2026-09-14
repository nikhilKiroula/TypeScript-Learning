//! Union Types
//? A union type allows a variable, parameter or return value to hold one of several specified types. 
//? It essentially acts as a logical OR operator for data types, providing flexibility while still maintaining compile-time type safety.
//? Limited types allowed

let id: string | number;

id = 101;        // ✅
id = "user101";  // ✅

// id = true;    // ❌


//! Literal Union Types
//? A literal union restricts a value to a specific set of allowed values.

let apiRequestStatus : "pending"|"success"|"error"
apiRequestStatus = "error"   // ✅
apiRequestStatus = "pending" // ✅
apiRequestStatus = "success" // ✅

// apiRequestStatus = "failed"  // ❌


//! Any
//? `any` is a TypeScript type that disables type checking for a value and allows it to hold any type. 
//? Almost anything allowed
//? ⚠️ Avoid any when possible

let data: any = "Hello";
data.toUpperCase(); // ✅

data = 100;       // ✅
data = true;      // ✅
data = [1, 2, 3]; // ✅
data = {};        // ✅


// TypeScript won't protect us here:
data = 100;

// data.toUpperCase();   // ❌ Runtime error

