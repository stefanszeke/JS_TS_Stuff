import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();


// singleton database connection
export class Database {
  private static instance: Database;
  public readonly connection: mysql.Connection;

  private constructor() {

    this.connection = mysql.createConnection({
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });
    
    this.connection.connect((err) => {
      if (err) {
        console.log("Error connecting to Db");
        return;
      }
      console.log("Connected to Database");
    });
   }


  public static getInstance() {
    if (!Database.instance) {
      Database.instance =  new Database();
    } else {
      console.log("cant create new connection, Connection already established");
    }
    return Database.instance;
  }
  

  useMySql(sql: string, options: any = []): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.connection.query(sql, options, (error, result) => {
        if (error) { reject(console.log(error)) };

        resolve(result)
      })
    })
  }

}








