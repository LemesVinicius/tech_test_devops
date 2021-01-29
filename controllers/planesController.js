const Planes = require("../models/planesModels");

const addPlane = async (req, res) => {
  const { model, registry } = req.body;

  Planes.sync()
    .then(async () =>
      Planes.create({
        model,
        registry,
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

const getPlane = (req, res) => {
  const { id } = req.params;

  Planes.findByPk(id)
    .then((plane) =>
      plane
        ? res.json(plane).status(200).send()
        : res.json({ msg: "Aviao inexistente" }).status(200).send()
    )
    .catch((err) => res.status(500).send(err));
};

const getPlanes = (req, res) => {
  Planes.findAll({
    where: { ...req.query },
  })
    .then((planes) =>
      planes.length > 0
        ? res.json(planes).status(200).send()
        : res
            .json({ msg: "Não existem avioes cadastrados ainda" })
            .stauts(200)
            .send()
    )
    .catch((err) => res.status(500).send(err));
};

const deletePlane = async (req, res) => {
  Planes.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() =>
      res.json({ msg: "Aviao excluido com sucesso" }).status(200).send()
    )
    .catch(() =>
      res.json({ msg: "Não foi possivel excluir o aviao" }).status(500).send()
    );
};

const updatePlane = async (req, res) => {
  Planes.update(
    { ...req.body },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() =>
      res.json({ msg: "Aviao alterado com sucesso" }).status(200).send()
    )
    .catch(() =>
      res.json({ msg: "Não foi possivel alterar o aviao" }).status(500).send()
    );
};

module.exports = {
  addPlane,
  getPlane,
  getPlanes,
  deletePlane,
  updatePlane,
};
