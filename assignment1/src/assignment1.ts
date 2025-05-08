{
// Problem: 01
    // Solution:
    
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper ===false) {
        return input.toLowerCase();
        } else {
        return input.toUpperCase();
        }
        }
    
// Validation of function--->
    console.log(formatString("Hello"))
    console.log(formatString("Hello", true))
    console.log(formatString("Hello", false))


// Problem:02
    // Solution:
    
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  const getItems: { title: string; rating: number }[] = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].rating >= 4) {
      getItems.push(items[i]);
    }
  }

  return getItems;
}
// Validation of the function
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

    console.log(filterByRating(books));
    

    // Problem: 03
    // Solution:
    function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];

    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
        result.push(arrays[i][j]);
        }
    }
        return result;
    }
// Validation of Function (Generic)
    console.log(concatenateArrays(["a", "b"], ["c"]));          // ["a", "b", "c"]
    console.log(concatenateArrays([1, 2], [3, 4], [5]));         // [1, 2, 3, 4, 5]

// Problem: 04
    // Solution:
    class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `"Make: ${this.make}, Year: ${this.year}"`; // Added quotes
    }
    }

    class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `"Model: ${this.model}"`;
    }
    }
    //Validation
    const myCar = new Car("Toyota", 2020, "Corolla");

    console.log(myCar.getInfo());
    console.log(myCar.getModel());


// Problem: 05
    // Solution:
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}
//validation
console.log(processValue("hello"));
    console.log(processValue(10));
    
// Problem: 06
    // Solution
        interface Product {
        name: string;
        price: number;
        }

        function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
            return null;
        }

        let mostExpensive = products[0];

        for (let i = 1; i < products.length; i++) {
            if (products[i].price > mostExpensive.price) {
            mostExpensive = products[i];
            }
        }

        return mostExpensive;
        }
        // Validation
        const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
        ];

        console.log(getMostExpensiveProduct(products));



// Problem: 07
    // solution:

        enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
        }
        function getDayType(day: Day): string {
        if (day === Day.Saturday || day === Day.Sunday) {
            return `"Weekend"`;
        } else {
            return `"Weekday"`;
        }
        }
        // Validation
        console.log(getDayType(Day.Monday));
        console.log(getDayType(Day.Sunday));


// Problem: 08
    // Solution

const squareAsync = (n: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject("Negative number not allowed");
    } else {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
};
// Validation
squareAsync(4)
  .then(result => console.log(result))
  .catch(error => console.error(error));

squareAsync(-3)
  .then(result => console.log(result))     
  .catch(error => console.error(error));







    
    // 
}