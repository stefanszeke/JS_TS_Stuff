import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import { Database } from "./database/database";

dotenv.config();
const app = express();




const dbConnection = Database.getInstance();
const dbConnection2 = Database.getInstance();
// const dbConnection3 = new Database();

app.get("/", async(req: Request, res: Response) => {
  const games = await dbConnection.useMySql("SELECT * FROM games");
  res.json(games)
});




const PORT = process.env.PORT
app.listen(PORT, () => console.log(`[Server] on port ${PORT}, [LINK]: http://localhost:${PORT}`));
