const Pilots = require("../models/pilotsModels");

const addPilot = async (req, res) => {
  const { name } = req.body;

  Pilots.sync()
    .then(async () =>
      Pilots.create({
        name,
      })
        .then((result) => res.json(result).status(200).send())
        .catch((err) => {
          console.log(err);
          return res.json({ msg: "erro ao salvar recurso" }).status(500).send();
        })
    )
    .catch((err) => {
      console.log(err);
      return res
        .json({ msg: "erro ao verificar existencia da tabela" })
        .status(500)
        .send();
    });
};

const getPilot = (req, res) => {
  const { id } = req.params;

  Pilots.findByPk(id)
    .then((pilot) =>
      pilot
        ? res.json(pilot).status(200).send()
        : res.json({ msg: "Piloto inexistente" }).status(200).send()
    )
    .catch((err) => res.status(500).send(err));
};

const getPilots = (req, res) => {
  Pilots.findAll({
    where: { ...req.query },
  })
    .then((pilots) =>
      pilots.length > 0
        ? res.json(pilots).status(200).send()
        : res
            .json({ msg: "Não existem pilotos cadastrados ainda" })
            .stauts(200)
            .send()
    )
    .catch((err) => res.status(500).send(err));
};

const deletePilot = async (req, res) => {
  Pilots.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() =>
      res.json({ msg: "Piloto excluido com sucesso" }).status(200).send()
    )
    .catch(() =>
      res.json({ msg: "Não foi possivel excluir o piloto" }).status(500).send()
    );
};

const updatePilot = async (req, res) => {
  Pilots.update(
    { ...req.body },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() =>
      res.json({ msg: "Piloto alterado com sucesso" }).status(200).send()
    )
    .catch(() =>
      res.json({ msg: "Não foi possivel alterar o piloto" }).status(500).send()
    );
};

module.exports = {
  addPilot,
  getPilot,
  getPilots,
  deletePilot,
  updatePilot,
};
