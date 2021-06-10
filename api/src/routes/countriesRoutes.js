const { Router } = require('express');
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const countriesRoutes = Router();

countriesRoutes.get('/', async (req, res) => {
	let query = req.query.name ? req.query.name[0].toUpperCase() + req.query.name.slice(1) : undefined;
	let countries = query 
		? await Country.findAll({
			attributes: {exclude: ['createdAt', 'updatedAt']},
			where: {name: {[Op.like]: `%${query}%`}},
			limit: 10
		})
		: await Country.findAll({
			attributes: {exclude: ['createdAt', 'updatedAt']},
			limit: 10
		})
	return countries.length ? res.json(countries) : res.status(400).send();
})

countriesRoutes.get('/:id', async (req, res) => {
	let requestedID = req.params.id.toUpperCase();
	let country = await Country.findAll({
		attributes: {exclude: ['createdAt', 'updatedAt']},
		where: {id: {[Op.eq]: requestedID}},
		include: {
			model: Activity,
			attributes: {exclude: ['createdAt', 'updatedAt']}
		}
	})
	return country.length ? res.json(country) : res.status(400).send();
})

module.exports = countriesRoutes;