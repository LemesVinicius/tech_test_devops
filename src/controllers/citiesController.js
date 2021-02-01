const Cities = require("../models/citiesModels");

const addCity = (req, res) => {
  const { name, country } = req.body;

  Cities.sync().then(async () => {
    Cities.create({ name, country })
      .then((result) => res.json({ result }).status(200).send())
      .catch((err) => {
        console.log(err);
        return res.json({ msg: "erro ao salvar recurso" }).status(500).send();
      });
  });
};

const getCity = async (req, res) => {
  const { id } = req.params;

  Cities.findByPk(id)
    .then((city) =>
      city
        ? res.json(city).status(200).send()
        : res.json({ msg: "Cidade inexistente" }).status(200).send()
    )
    .catch((err) => res.status(500).send(err));
};

const getCities = async (req, res) => {
  Cities.findAll({
    where: { ...req.query },
  })
    .then((cities) =>
      cities.length > 0
        ? res.json(cities).status(200).send()
        : res
            .json({ msg: "Não existem cidades cadastradas ainda" })
            .stauts(200)
            .send()
    )
    .catch((err) => res.status(500).send(err));
};

const deleteCity = async (req, res) => {
  Cities.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() =>
      res.json({ msg: "Cidade excluida com sucesso" }).status(200).send()
    )
    .catch((err) =>
      res.json({ msg: "Não foi possivel excluir a cidade" }).status(500).send()
    );
};

const updateCity = async (req, res) => {
  Cities.update(
    { ...req.body },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() =>
      res.json({ msg: "Cidade alterada com sucesso" }).status(200).send()
    )
    .catch(() =>
      res.json({ msg: "Não foi possivel alterar a cidade" }).status(500).send()
    );
};

module.exports = { addCity, getCity, getCities, deleteCity, updateCity };
