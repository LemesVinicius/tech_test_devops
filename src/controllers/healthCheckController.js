const database = require("../db");
const os = require("os");

const getHealth = async (req, res) => {
  const databaseConnectionStatus = await getDatabaseConnectionStatus();
  const machineResourcesStatus = getMachineHealth();
  const appHealth = await defineAppHealth();

  return appHealth.status == "Healthy"
    ? res
        .json({
          ...appHealth,
          ...machineResourcesStatus,
          ...databaseConnectionStatus,
        })
        .status(200)
        .send()
    : res
        .json({
          ...appHealth,
          ...machineResourcesStatus,
          ...databaseConnectionStatus,
        })
        .status(503)
        .send();
};

const defineAppHealth = async () => {
  const databaseHealth = await getDatabaseConnectionStatus();
  const appHealth =
    databaseHealth.database.connection == "pass"
      ? { status: "Healthy" }
      : { status: "Unhealthy" };

  return appHealth;
};

const getMachineHealth = () => {
  return {
    avaliableMem: os.freemem(),
    uptime: process.uptime(),
  };
};

const getDatabaseConnectionStatus = () =>
  database
    .authenticate()
    .then(() => {
      return { database: { connection: "pass" } };
    })
    .catch(() => {
      return { database: { connection: "fail" } };
    });
module.exports = { getHealth };
