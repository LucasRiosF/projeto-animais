import { AnimalRepositorio } from "../models/AnimalRepositorio.js";
import { Animal } from "../models/Animal.js"; 

const animalRepositorio = new AnimalRepositorio();

export const buscarTodosAnimais = (req, res) => {
    const animais = animalRepositorio.buscarTodosAnimais();
    if (animais.length) {
        return res.status(200).json(animais);
      }
      return res.status(200).json({ message: "Não há animais cadastrados" });
    };

export const buscarAnimalPorId = (req, res) => {
    const { id } = req.params;
    const animal = animalRepositorio.buscarAnimalPorId(id);

    if (!animal) res.status(404).send({ message: "Animal não encontrado!" });

    return res.send(animal);
  };


export const criarAnimal = (req, res) => {
    const { nome, tipo, idade, cor, imagem, vacinado  } = req.body;
    const animal = new Animal(nome, tipo, idade, cor, imagem, vacinado);

    animalRepositorio.criarAnimal(animal);

    return res.status(201).send(animal);
}

export const atualizarAnimal = (req, res) => {
    const { id } = req.params;
    const {nome, tipo, idade, cor, imagem, vacinado } = req.body;

    const animal = animalRepositorio.buscarAnimalPorId(id);

    if (!animal) res.status(404).send({ message: "Animal não encontrado!" });

  animalRepositorio.atualizarAnimal(nome, tipo, idade, cor, imagem, vacinado);

  return res.send(animal);
};

export const deletarAnimal = (req, res) => {
    const { id } = req.params;
    const animal = animalRepositorio.buscarAnimalPorId(id)
    
    if (!animal) res.status(404).send({ message: "Animal não encontrado!" });

    animalRepositorio.deletarAnimal(id);
  
    return res.send(animal);
};

