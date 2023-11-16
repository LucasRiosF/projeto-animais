import { v4  as uuidv4 } from "uuid";

export class Animal {
    constructor (nome, tipo, idade, cor, imagem, vacinado){
        this.id = this.generateId();
        this.nome = nome;
        this.tipo = tipo;
        this.idade = idade;
        this.cor = cor;
        this.imagem = imagem;
        this.vacinado = vacinado;
    }

    generateId() {
        return uuidv4();
      }
}