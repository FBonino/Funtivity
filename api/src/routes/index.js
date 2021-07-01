const { Router } = require('express');
const startingRoute = require("./startingRoute");
const countriesRoutes = require("./countriesRoutes");
const activityRoutes = require("./activityRoutes");

const router = Router();

router.use("/start", startingRoute);
router.use("/countries", countriesRoutes);
router.use("/activity", activityRoutes);

module.exports = router;