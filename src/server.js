import { jogoRouter } from "./routes/jogo.route.js";
import express from "express";

const port = 3000;
const app = express();

app.use(express.json());
app.use("/jogo", jogoRouter);

app.listen(port, ()=>{
    console.log(`API rodando em: http://localhost:${port}`);
});