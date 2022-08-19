import express, { Request, Response } from "express";
import cors from "cors";
import { users} from "./data/user";


const app = express();
app.use(express.json());
app.use(cors());
app.listen(3003, () => {
    console.log("App rodando...")
});
console.log("Oi")
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
} )
 // a - Ultilizo o get
 // b - indicaria como /users

