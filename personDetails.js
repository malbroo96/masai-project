// Step 1: Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Step 2: Add introduce method to Person.prototype
Person.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Step 3: Employee constructor function that inherits from Person
function Employee(name, age, jobTitle) {
  // Call the Person constructor to initialize name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Step 4: Set up inheritance (prototype chain)
Employee.prototype = Object.create(Person.prototype);

// Step 5: Reset the constructor reference to Employee
Employee.prototype.constructor = Employee;

// Step 6: Add work method to Employee.prototype
Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Step 7: Demonstration

// Creating a Person instance
const person1 = new Person("Alice", 30);
person1.introduce();  // Output: Hi, my name is Alice and I am 30 years old.

// Creating an Employee instance
const employee1 = new Employee("Bob", 40, "Software Engineer");
employee1.introduce(); // Inherited from Person
employee1.work();      // Output: Bob is working as a Software Engineer.
