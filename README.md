1.  What are some differences between interfaces and types in TypeScript?

Interface and type are the keywords of TypeScript which are used to define and customize data types in TypeScripts.

Interface in TypeScript.
interface is a pure TypeScript compile-time construct that defines a contract for object shapes.itis a way to define the structure of an object. 
It is used as a blueprint that depicts the properties and its types an object should contain.
It enforces a structural agreement on properties, methods, and their types but does not exist at runtime.

Features of Interface:
    =>  It helps TypeScript check types at compile time.
    =>  It makes the code simple and easy to read and maintainable.
    =>  It can be reused and extended to create more customized complex types.
    =>  it describes objects, classes, and their hierarchies via extend keyword
    =>  it supports declaration merging (multiple definitions which are automatically-merged
    =>  it cannot represent primitives, unions, or tuples directly.

Use Interface.
    =>To make your code type-safe
    =>To avoid mistakes when working with objects
    =>To make your code self-documenting


Example of Interface

interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Alice",
  age: 30
};

-----------------------Extending Interfaces--------------------

interface Animal {
  species: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  species: "Canine",
  breed: "Golden Retriever"
};

-------------------------Interface with Optional Properties---------------------

interface Car {
  brand: string;
  model?: string; // Optional
}

const car1: Car = { brand: "Toyota" };
const car2: Car = { brand: "Tesla", model: "Model X" };


-------------------Function Interface------------------

interface Greet {
  (name: string): string;
}

const sayHello: Greet = (name) => `Hello, ${name}!`;
console.log(sayHello("Bob"));


---------------Interface for Class Implementation--------------------


interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.getArea()); // Output: 50


---------------------------------------------Type-------------------------------------------------

Type is a named reference to any TypeScript type, including primitives, objects, unions, intersections, and computed types. 
It acts as an alias for complex type definitions.


Key Traits of Type
=>Type  represent any valid type-- primitives, objects, unions, etc.
=>Type supports advanced types --mapped, conditional, template literals.
=>It provides no declaration merging like duplicate names cause errors

Uses of Type
=>  It defines object shapes, which ensure consistent data structures in an application.
=>  it enable union and intersection operations, which make  flexible combinations of various data types.
=>  By using type, function signatures can be defined , enforcing expected input and output values.
=>  Its tuple types  specifies fixed-length arrays with precise element types for type security.



Example of types

-----------------------Basic Types--------------

type Person = {
  name: string;
  age: number;
};

const user: Person = {
  name: "Alice",
  age: 30
};

--------------------------------------Extending Types (Intersection)-------------------------------

type Animal = {
  species: string;
};

type Dog = Animal & {
  breed: string;
};

const myDog: Dog = {
  species: "Canine",
  breed: "Golden Retriever"
};



-----------------------------------Type with Optional Properties-------------------------
type Car = {
  brand: string;
  model?: string; // Optional
};

const car1: Car = { brand: "Toyota" };
const car2: Car = { brand: "Tesla", model: "Model X" };

-----------------------------Function Type---------------------------------------------

type Greet = (name: string) => string;

const sayHello: Greet = (name) => `Hello, ${name}!`;
console.log(sayHello("Bob"));


-----------------------------Type with Read-Only Properties-------------------------------

type User = {
  readonly id: number;
  name: string;
};

const user: User = { id: 1, name: "Charlie" };
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

----------------------------------Union Type-------------------------

type Status = "pending" | "approved" | "rejected";

let currentStatus: Status = "approved";


------------------------Tuple Type-------------------

type Coordinates = [number, number];

const point: Coordinates = [10, 20];

--------------------------------Type for Class Implementation-----------------

type Shape = {
  getArea(): number;
};

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.getArea()); // Output: 50




2. What is the use of the keyof keyword in TypeScript? Provide an example.

In TypeScript, keyof is used to derive the keys of an object type as a union of string literals. 
It is used in creating type-safe access to object properties.


---------------------------------Example--------------------------

type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;

const getValue = (obj: Person, key: PersonKeys) => obj[key];

const user: Person = { name: "Alice", age: 30 };
console.log(getValue(user, "name")); 



3.What is the use of enums in TypeScript? Provide an example of a numeric and string enum.


In TypeScript, enums allow  to define a set of named constants, 
which makes our code more readable and maintainable. it can be numeric or string-based.

------------------------------Numeric Enum Example-----------------------
enum Status {
  Pending = 1,
  Approved,
  Rejected
}

console.log(Status.Pending); // Output: 1

---------------------------------String Enum Example---------------------
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

console.log(Role.Admin); // Output: "ADMIN"

