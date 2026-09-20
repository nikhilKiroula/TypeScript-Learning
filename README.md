# TypeScript Learning 🚀

A structured repository for learning and practicing TypeScript from
basic concepts to intermediate-level concepts through practical examples.

This repository contains separate TypeScript files for different concepts,
making it easier to understand, practice, and revise TypeScript step by step.

---

## 📂 Project Structure

```text
src/
├── 01-basics.ts
├── 02-types.ts
├── 03-union-&-any.ts
├── 04-type-narrowing.ts
├── 05-type-unknown.ts
├── 06-type-assertion.ts
├── 07-void-&-never.ts
├── 08-interface.ts
├── 09-objects.ts
├── 10-utility-types.ts
└── 11-functions.ts
```

---

## 📚 Topics Covered

### 01 — Basics

**File:** `01-basics.ts`

- TypeScript fundamentals
- Type annotations
- Type inference
- Primitive types
- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `bigint`
- `symbol`
- Arrays
- Objects
- `let` and `const`

### 02 — Types

**File:** `02-types.ts`

- Type Annotation
- Type Inference
- Variable type annotations
- Function parameter types
- Function return types

### 03 — Union & Any

**File:** `03-union-&-any.ts`

- Union Types
- Multiple possible types
- `any`
- Type safety
- Working with different types

### 04 — Type Narrowing

**File:** `04-type-narrowing.ts`

- Type Narrowing
- `typeof`
- `Array.isArray()`
- `in` operator
- `instanceof`
- Truthiness Narrowing
- Equality Narrowing
- Type Alias
- Literal Types
- Discriminated Unions
- Custom Type Guards
- Type Predicates

### 05 — Unknown

**File:** `05-type-unknown.ts`

- `unknown` type
- Safe handling of unknown values
- Type checking before using `unknown`
- String narrowing
- Number narrowing
- `unknown` vs `any`

### 06 — Type Assertion

**File:** `06-type-assertion.ts`

- Type Assertion
- `as` syntax
- Type Assertion with `unknown`
- DOM element type assertion
- Angle-bracket syntax
- Type Assertion in TSX/React
- Type Assertion vs Type Narrowing

### 07 — Void & Never

**File:** `07-void-&-never.ts`

- `void`
- Functions that return no value
- `never`
- Functions that never return normally
- Throwing errors with `never`
- Infinite loops with `never`
- `void` vs `never`

### 08 — Interface

**File:** `08-interface.ts`

- Interfaces
- Object structure with interfaces
- Required properties
- Optional properties
- Readonly properties
- Methods in interfaces
- Interfaces with functions
- Interface `extends`
- Interface inheritance
- Interface vs Type
- Declaration Merging

### 09 — Objects

**File:** `09-objects.ts`

- Object Type Annotation
- Object Type Inference
- Optional Properties
- Readonly Properties
- Nested Objects
- Object Methods
- Methods with Parameters
- Arrow Functions as Object Properties
- Type Alias with Objects
- Interface with Objects
- Interface `extends`
- Index Signatures
- Dynamic Object Keys
- Structural Typing

### 10 — Utility Types

**File:** `10-utility-types.ts`

- `Partial<T>`
- `Required<T>`
- `Pick<T, K>`
- `Omit<T, K>`

#### Utility Types Quick Reference

| Utility Type | Purpose |
|---|---|
| `Partial<T>` | Makes all properties optional |
| `Required<T>` | Makes all properties required |
| `Pick<T, K>` | Selects specific properties |
| `Omit<T, K>` | Removes specific properties |

### 11 — Functions

**File:** `11-functions.ts`

- Function Type Annotation
- Function Return Type
- Optional Parameters
- Default Parameters
- Rest Parameters
- Arrow Functions
- Function Types
- Function Types with `void`
- Functions as Parameters
- Callback Functions
- Function Overloading
- `this` in Functions
- `this` Parameter
- `this` inside Objects
- Arrow Functions and `this`
- `void` in Functions
- `never` in Functions

---

## 🛠️ Technologies

- TypeScript
- JavaScript
- Node.js
- Git
- GitHub
- VS Code

---

## 🎯 Goal

The goal of this repository is to build a strong foundation in TypeScript
by understanding concepts through practical examples.

Each concept is organized into a separate TypeScript file so that it can
be studied, practiced, and revised independently.

---

## 📈 Learning Progress

- [x] TypeScript Basics
- [x] Types
- [x] Union Types & `any`
- [x] Type Narrowing
- [x] `unknown`
- [x] Type Assertion
- [x] `void` & `never`
- [x] Interfaces
- [x] Objects
- [x] Utility Types
- [x] Functions

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the Project

```bash
cd <repository-name>
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run a TypeScript File

This project can be run using `tsx`.

```bash
npx tsx src/11-functions.ts
```

You can replace the filename with any TypeScript file inside the
`src` directory.

For example:

```bash
npx tsx src/04-type-narrowing.ts
```

---

## 📖 Learning Approach

Each file contains:

- Concept explanations
- TypeScript syntax
- Practical examples
- Code comments
- Important points
- Small examples for practice and revision

The repository follows a step-by-step learning approach, starting from
TypeScript fundamentals and gradually moving towards more advanced
type-system concepts.

---

## 🔮 Next Topics

More TypeScript concepts will be added as the learning journey continues.

Planned topics include:

- Arrays & Tuples
- Enums
- Generics
- Classes
- Advanced Type Manipulation
- TypeScript with React
- TypeScript with Node.js
- TypeScript in MERN Stack Applications

---

## 👨‍💻 Author

**Nikhil Singh Kiroula**

MERN Stack Developer

Learning TypeScript to build type-safe and scalable web applications.

---

⭐ This repository represents my TypeScript learning journey,
with concepts implemented and practiced through code examples.