export const buscarTodosAnimais = (req, res) => {
    return res.status(200).send({
        message: "Todos animais via controller",
        status: "OK"
    });
};

export const buscarAnimalPorId = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        message: `Animal com id ${id}`,
        origem: "controller"
    });
}

export const criarAnimal = (req, res) => {
    const { nome, tipo, idade, cor, imagem, vacinacao  } = req.body;

    if(!nome || !tipo || !idade || !cor || !imagem ||!vacinacao ){
        return res.status(400).send({ message: "Dados inválidos" });
    }
    return res.status(201).send({
        message: `Rota POST animal`,
        origem: "controller"
    });
}

export const atualizarAnimal = (req, res) => {
    const { id } = req.params;
    const { nome, tipo, idade, cor, imagem  } = req.body;

    if(!nome || !tipo || !idade || !cor || !imagem ||!vacinacao ){
        return res.status(400).send({ message: "Dados inválidos" });
    }
    return res.status(201).send({
        message: `Rota PUT animal por id ${id}`,
        origem: "controller"
    });
};

export const deletarAnimal = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        message: `Rota DELETE animal com id ${id}`,
        origem: "controller"
    });
}