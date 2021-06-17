const { Router } = require('express');
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const countriesRoutes = Router();

countriesRoutes.get('/', async (req, res) => {
	let name = req.query.name ? req.query.name[0].toUpperCase() + req.query.name.slice(1) : "";
	let filter = !req.query.filter ? ["Continent", ""] : req.query.filter.split(',');
	filter[1] = filter[1] === "All" ? "" : filter[1];
	let order = req.query.order ? req.query.order.split(',') : ["name", "ASC"];
	let offset = req.query.offset ? req.query.offset * 10 : 0;
	let countries = filter[0] === "Continent"
		? await Country.findAll({
			attributes: {exclude: ['createdAt', 'updatedAt']},
			where: {[Op.and]: [{name: {[Op.like]: `%${name}%`}}, {continent: {[Op.like]: `%${filter[1]}%`}}]},
			order: [order],
			limit: 10,
			offset: offset
		})
		: await Country.findAll({
			attributes: {exclude: ['createdAt', 'updatedAt']},
			where: {name: {[Op.like]: `%${name}%`}},
			order: [order],
			limit: 10,
			offset: offset,
			include: {
				model: Activity,
				where: {difficulty: {[Op.like]: `%${filter[1]}%`}}
			}
		})
	return countries.length ? res.json(countries) : res.status(400).send();
})

countriesRoutes.get('/all', async (req, res) => {
	let allCountries = await Country.findAll({attributes: ["name"]});
	return res.json(allCountries);
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
	return country.length ? res.json(country[0]) : res.status(400).send();
})

module.exports = countriesRoutes;