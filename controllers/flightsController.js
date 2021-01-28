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

const getFlight = async (req, res) => {
  const { id } = req.params;

  Flights.findByPk(id)
    .then((flight) =>
      flight
        ? res.json(flight).status(200).send()
        : res.json({ msg: "Voo inexistente" }).status(200).send()
    )
    .catch((err) => res.status(500).send(err));
};

const getFlights = async (req, res) => {
  Flights.findAll({
    where: { ...req.query }
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


module.exports = { addFlights, getFlight, getFlights };
