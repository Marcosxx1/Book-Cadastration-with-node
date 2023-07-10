import express from "express";
import AutorController from "../controller/autorController.js";

const routerAutores = express.Router();

routerAutores
    .get("/autor", AutorController.listarAutores)
    .get("/autor/:id", AutorController.buscarAutorPorId);

routerAutores.post("/autor", AutorController.cadastrarAutor);

routerAutores.patch("/autor/:id", AutorController.atualizarAutor);

routerAutores.delete("/autor/:id", AutorController.apagarAutor);

export default routerAutores;
