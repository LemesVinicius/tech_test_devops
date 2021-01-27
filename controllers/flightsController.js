const addFlights = (req, res) => {
  const { time, location, plane, pilot, status } = req.body;

  return res.send().status(200);
};

module.exports = { addFlights };
