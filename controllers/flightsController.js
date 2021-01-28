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
      return res.status(200).send(JSON.stringify(result));
    })
    .catch((err) => res.status(500).send(err));
};

const getFlight = async (req, res) => {
  const { id } = req.params;

  Flights.findByPk(id)
    .then((flight) =>
      flight
        ? res.status(200).send(JSON.stringify(flight))
        : res.status(200).send(JSON.stringify({ msg: "Voo inexistente" }))
    )
    .catch((err) => res.status(500).send(err));
};

const getFlights = async (req, res) => {};

module.exports = { addFlights, getFlight, getFlights };
