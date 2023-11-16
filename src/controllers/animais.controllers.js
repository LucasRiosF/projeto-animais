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

    /*const UrlValida = (url) => {
      if (url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
      } else{
        return false;
      }
    }


      if(nome.length < 3 || nome.length > 50){
        return res.status(404).send({message: "nome inválido"})
      } else if(!Number.isInteger(idade)){
        return res.status(404).send({message: "idade inválida"})
        } else if(type.length > 30){
          return res.status(404).send({message: "tamanho inválido"})
        }else if (cor == Number){
          return res.status(404).send({message: "cor inválida"})
        }else if (typeof vacinado == Boolean){
          return res.status(404).send({message: "vacina inválida"})
        }else if (!UrlValida(imagem)){
          return res.status(404).send({message: "URL inválido"})
        }*/

  

    animalRepositorio.criarAnimal(animal);

    return res.status(200).send(animal);
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

