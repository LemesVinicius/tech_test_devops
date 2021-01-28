const Countries = require("../models/countriesModels");

const addCountry = async (req, res) => {
  const { name } = req.body;

  Countries.sync()
    .then(async () =>
    Countries.create({
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

const getCountry = (req, res) => {
  const { id } = req.params;

  Countries.findByPk(id)
    .then((country) =>
      country
        ? res.json(country).status(200).send()
        : res.json({ msg: "Pais inexistente" }).status(200).send()
    )
    .catch((err) => res.status(500).send(err));
};

const getCountries = (req, res) => {
  Countries.findAll({
    where: { ...req.query },
  })
    .then((countries) =>
      countries.length > 0
        ? res.json(countries).status(200).send()
        : res
            .json({ msg: "Não existem paises cadastrados ainda" })
            .stauts(200)
            .send()
    )
    .catch((err) => res.status(500).send(err));
};

const deleteCountry = async (req, res) => {
  Countries.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() =>
      res.json({ msg: "Pais excluido com sucesso" }).status(200).send()
    )
    .catch(() =>
      res.json({ msg: "Não foi possivel excluir o pais" }).status(500).send()
    );
};

const updateCountry = async (req, res) => {
  Countries.update(
    { ...req.body },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() =>
      res.json({ msg: "Pais alterado com sucesso" }).status(200).send()
    )
    .catch(() =>
      res.json({ msg: "Não foi possivel alterar o voo" }).status(500).send()
    );
};

module.exports = {
  addCountry,
  getCountry,
  getCountries,
  deleteCountry,
  updateCountry,
};
