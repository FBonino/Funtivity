const { Router } = require('express');
const { Op } = require('sequelize');
const { Activity, Country } = require('../db');

const activityRoutes = Router();

activityRoutes.post('/', async (req, res) => {
	let { name, difficulty, duration, season, countries } = req.body;
	let newActivity = await Activity.create({
		name: name,
		difficulty: difficulty,
		duration: duration,
		season: season
	});
	countries = countries.split(',');
	countries.forEach(async countryName => {
		let country = await Country.findAll({
			where: {name: {[Op.eq]: countryName}}
		});
		country.length ? await country.pop().addActivity(newActivity.id) : null;
	});
	res.sendStatus(200);
})

module.exports = activityRoutes;