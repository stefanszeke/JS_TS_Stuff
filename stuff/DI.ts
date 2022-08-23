// what is dependency injection?
// DI is a design pattern that allows us to decouple classes from their dependencies.
// DI is a way to implement Inversion of Control (IoC) in our code.

// When to use DI?
// When we want to decouple classes from their dependencies.
// When we want to make our code more testable.
// When we want to make our code more flexible.

// DI example database
// We have a database class that we want to use in our application.
// We want to decouple the database class from the application class.

interface IDatabase {
  getData(): string;
}

class Database implements IDatabase {
  constructor() {
    console.log("Database created");
  }
  getData() {
    return "data";
  }
}

class App {
  database: Database;
  constructor() {
    this.database = new Database();
  }
}

// DI example database with DI
// we can inject the database dependency into the DatabaseUser class
// we can do this by passing the database as a parameter to the constructor

class MockDatabase implements IDatabase {
  constructor() {
    console.log("MockDatabase created");
  }
  getData() {
    return "mock data";
  }
}

class App2 {
  data: string;
  constructor(private database: Database) {
    this.data = database.getData();
  }
}

class App3 {
  data: string;
  constructor(private database: MockDatabase) {
    this.data = database.getData();
  }
}




