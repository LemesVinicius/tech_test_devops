const Flights = require("../models/flightsModels");

const addFlight = async (req, res) => {
  const { time, location, plane, pilot, status } = req.body;

  Flights.sync()
    .then(async () => 
     Flights.create({
        time_in: time.in,
        time_out: time.out,
        location_from: location.from,
        location_to: location.to,
        plane: plane,
        pilot: pilot,
        status: status,
      }).then( result => res.json(result).status(200).send() )
      .catch( err => {
        console.log(err);
        return res.json({ msg: "erro ao salvar recurso" }).status(500).send();
      })
    )
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

const deleteFlight = async (req, res) => {
  Flights.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((flight) =>
      res.json({ msg: "Voo excluido com sucesso" }).status(200).send()
    )
    .catch((err) =>
      res.json({ msg: "Não foi possivel excluir o voo" }).status(500).send()
    );
};

const updateFlights = async (req, res) => {
  Flights.update(
    { ...req.body },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((flight) =>
      res.json({ msg: "Voo alterado com sucesso" }).status(200).send()
    )
    .catch((err) =>
      res.json({ msg: "Não foi possivel alterar o voo" }).status(500).send()
    );
};

module.exports = {
  addFlight,
  getFlight,
  getFlights,
  deleteFlight,
  updateFlights,
};
