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

module.exports = { addFlights };
