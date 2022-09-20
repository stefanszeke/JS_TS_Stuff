export {}

// low level classes - database, file, etc.
// high level classes - logic which uses low level classes

// dependency inversion principle
// is a principle in software engineering that states:
// 1. high level modules should not depend on low level modules
//  both should depend on abstractions
// 2. abstractions should not depend on details
//  details should depend on abstractions

// example

// bad //////////////////////

// low level classes
class MySQL1 {
    constructor(private host: string, private port: number) {}
    connect() {
        console.log(`MySQL: ${this.host}:${this.port}`)
    }
}

class Postgres1 {
    constructor(private host: string, private port: number) {}
    connect() {
        console.log(`Postgres: ${this.host}:${this.port}`)
    }
}

// high level classes

class Client1 {
    constructor(private db: MySQL | Postgres) {}
    connect() {
        return this.db.connect()
    }
}

// good ////////////////////////
// how to implement dependency inversion principle:
// 1. create interface
// 2. use interface in high level classes
// 3. use low level classes in interface


// interface to define the shape of the class, not the implementation
interface Database {
    connect(): void
    getData(): void
}


// low level classes
class MySQL implements Database {
    constructor(private host: string, private port: number) {}
    connect() {
        console.log(`MySQL: ${this.host}:${this.port}`)
    }
    getData() {
        console.log('MySQL data')
    }
}

class Postgres implements Database {
    constructor(private host: string, private port: number) {}
    connect() {
        console.log(`Postgres: ${this.host}:${this.port}`)
    }
    getData() {
        console.log('Postgres data')
    }
}

// high level classes

class Client {
    constructor(private db: Database) {}
    connect() {
        return this.db.connect()
    }
    getData() {
        return this.db.getData()
    }
}

const mysql = new MySQL('localhost', 3306)
const postgres = new Postgres('localhost', 5432)

const client1 = new Client(mysql)
client1.connect()
client1.getData()

const client2 = new Client(postgres)
client2.connect()
client2.getData()



