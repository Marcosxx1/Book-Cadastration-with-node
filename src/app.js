import db from './config/dbConnect.js';
import routes from "./livro_models/routes/index.js";
import express from 'express';

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("Successfuly connected to database");
});

const app = express();

app.use(express.json());

routes(app);

export default app;