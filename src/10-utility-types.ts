// ! UTILITY TYPES
// ? Partial, Required, Pick & Omit


// ? 1. PARTIAL

// Definition:
// `Partial<T>` makes all properties of an existing type optional.

// Simple:
// Existing type ki saari properties ko optional bana deta hai.

interface User {
  name: string;
  age: number;
  email: string;
}

const user: Partial<User> = {
  name: "Nikhil",
};

// `Partial<User>` means:
// name  → optional
// age   → optional
// email → optional

// So we can provide only the properties we need.


// ? 2. REQUIRED

// Definition:
// `Required<T>` makes all properties of an existing type required.

// Simple:
// Existing type ki saari optional properties ko required bana deta hai.

interface Customer {
  name: string;
  age?: number;
  email?: string;
}

const customer: Required<Customer> = {
  name: "Nikhil",
  age: 23,
  email: "nikhil@example.com",
};

// `Required<Customer>` means:
// name  → required
// age   → required
// email → required


// ? 3. PICK

// Definition:
// `Pick<T, K>` creates a new type by selecting specific properties
// from an existing type.

// Simple:
// Existing type mein se sirf required properties ko select/pick karna.

// `User` already contains:
// name
// age
// email

type UserInfo = Pick<User, "name" | "email">;

const userInfo: UserInfo = {
  name: "Nikhil",
  email: "nikhil@example.com",
};

// `UserInfo` contains only:
// name
// email


// ? 4. OMIT

// Definition:
// `Omit<T, K>` creates a new type by removing specific properties
// from an existing type.

// Simple:
// Existing type mein se jo properties nahi chahiye,
// unhe remove karna.

interface Account {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicAccount = Omit<Account, "password">;

const publicAccount: PublicAccount = {
  id: 101,
  name: "Nikhil",
  email: "nikhil@example.com",
};

// `PublicAccount` contains:
// id
// name
// email
// password → removed


// ? OMIT MULTIPLE PROPERTIES

type SafeAccount = Omit<Account, "password" | "email">;

const safeAccount: SafeAccount = {
  id: 101,
  name: "Nikhil",
};


// ! KEY POINTS

// ? Partial  → All properties become optional.
// ? Required → All properties become required.
// ? Pick    → Select specific properties.
// ? Omit    → Remove specific properties.

// ? Shortcut:
// ? Partial  → Optional
// ? Required → Required
// ? Pick    → Select
// ? Omit    → Remove