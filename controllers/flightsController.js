const Flights = require("../models/flightsModels");

const addFlights = async (req, res) => {
  const { time, location, plane, pilot, status } = req.body;

  Flights.sync()
    .then(async () => {
      const result = await Flights.create({
        time_in: time.in,
        time_out: time.out,
        location_from: location.from,
        location_to: location.to,
        plane: plane,
        pilot: pilot,
        status: status,
      });
      return res.json(result).status(200).send();
    })
    .catch((err) => res.status(500).send(err));
};

const getFlight = (req, res) => {
  const { id } = req.params;

  Flights.findByPk(id)
    .then((flight) =>
      flight
        ? res.json(flight).status(200).send()
        : res.json({ msg: "Voo inexistente" }).status(200).send()
    )
    .catch((err) => res.status(500).send(err));
};

const getFlights = (req, res) => {
  Flights.findAll({
    where: { ...req.query },
  })
    .then((flights) =>
      flights.length > 0
        ? res.json(flights).status(200).send()
        : res
            .json({ msg: "Não existem voos cadastrados ainda" })
            .stauts(200)
            .send()
    )
    .catch((err) => res.status(500).send(err));
};

const deleteFlights = async (req, res) => {
  Flights.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((flight) =>
      res.json({ msg: "Excluido com sucesso" }).status(200).send()
    )
    .catch((err) =>
      res.json({ msg: "Não foi possivel alterar recurso" }).status(500).send()
    );
};

module.exports = { addFlights, getFlight, getFlights, deleteFlights };
