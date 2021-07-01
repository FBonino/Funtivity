const { Router } = require('express');
const axios = require('axios').default;
const { Country } = require('../db');

const startingRoute = Router();

startingRoute.get('/', (req, res) => {
	axios.get("https://restcountries.eu/rest/v2/all")
		.then(({ data }) => {
			data.forEach(async country => {
				return await Country.findOrCreate({
					where: {name: country.name},
					defaults: {
						id: country.alpha3Code,
						name: country.name,
						flag: country.flag,
						continent: country.region,
						capital: country.capital,
						subregion: country.subregion,
						area: country.area,
						population: country.population
					}
				});
			})
			return res.sendStatus(200);
		});
})

module.exports = startingRoute;