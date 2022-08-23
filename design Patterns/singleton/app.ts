import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import { Database } from "./database/database";

dotenv.config();
const app = express();

// what is a singleton pattern?
// Singleton pattern is a creational design pattern that lets you ensure that a class has only one instance,
// while providing a global access point to this instance.

// when to use singleton pattern?
// when you need to ensure that only one instance of a class is created.



const dbConnection = Database.getInstance();
const dbConnection2 = Database.getInstance();
// const dbConnection3 = new Database();

app.get("/", async(req: Request, res: Response) => {
  const games = await dbConnection.useMySql("SELECT * FROM games");
  res.json(games)
});




const PORT = process.env.PORT
app.listen(PORT, () => console.log(`[Server] on port ${PORT}, [LINK]: http://localhost:${PORT}`));
