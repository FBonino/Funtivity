const { Router } = require('express');
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const countriesRoutes = Router();

countriesRoutes.get('/', async (req, res) => {
	let query = req.query.name;
	let countries = 
		query ? await Country.findAll({
			where: {name: {[Op.like]: `%${query}%`}},
			limit: 10
		})
		: await Country.findAll({
			limit: 10
		})
	return countries.length ? res.json(countries) : res.status(400).send();
})

countriesRoutes.get('/:id', async (req, res) => {
	let requestedID = req.params.id.toUpperCase();
	let country = await Country.findAll({
		where: {id: {[Op.eq]: requestedID}},
		include: Activity
	})
	return country.length ? res.json(country) : res.status(400).send();
})

module.exports = countriesRoutes;