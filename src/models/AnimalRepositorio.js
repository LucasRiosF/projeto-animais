export class AnimalRepositorio {
    constructor(){
        this.animais = []
    }

    buscarTodosAnimais(){
        return this.animais;
    }

    buscarAnimalPorId(){
        return this.animais.find((animal) => animal.id === id);
    }

    criarAnimal(animal){
        this.animais.push(animal)
    }

    atualizarAnimal(id, nome, tipo, idade, cor, imagem, vacinado){
        const animal = this.pegarAnimalPorId(id);
    

    if (animal) {
        animal.nome = nome;
        animal.tipo = tipo;
        animal.idade = idade;
        animal.cor = cor;
        animal.imagem = imagem;
        animal.vacinado = vacinado;
    }

    return animal
    }

    deletarAnimal(id){
        this.animais = this.animais.filter((animal) => animal.id !== id)
    }
}