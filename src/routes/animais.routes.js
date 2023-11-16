import { Router } from "express";

import { buscarTodosAnimais,
         buscarAnimalPorId,
        criarAnimal,
         atualizarAnimal,
        deletarAnimal 
    } from "../controllers/animais.controllers.js";

import  router from "./index.routes.js";

const rotasAnimais = Router();

rotasAnimais.get("/", buscarTodosAnimais);
rotasAnimais.get("/:id", buscarAnimalPorId);
rotasAnimais.post("/", criarAnimal);
rotasAnimais.put("/:id", atualizarAnimal);
rotasAnimais.delete("/:id", deletarAnimal);




export default rotasAnimais;