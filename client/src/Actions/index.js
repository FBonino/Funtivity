import axios from 'axios';

const BACKEND_URI = 'http://localhost:3001';

export function getCountries() {
	return function(dispatch){
		return axios.get(`${BACKEND_URI}/countries`)
			.then(({data}) => dispatch({
				type: "GET_COUNTRIES",
				payload: data
			}))
	}
}

export function getCountryByID(countryID) {
	return function(dispatch){
		return axios.get(`${BACKEND_URI}/countries/${countryID}`)
			.then(({data}) => dispatch({
				type: "GET_COUNTRY_BY_ID",
				payload: data
			}))
	}
}

export function getCountryByName(countryName) {
	return function(dispatch){
		return axios.get(`${BACKEND_URI}/countries?name=${countryName}`)
			.then(({data}) => dispatch({
				type: "GET_COUNTRY_BY_NAME",
				payload: data
			}))
	}
}

export function getAllCountries() {
	return function(dispatch) {
		return axios.get(`${BACKEND_URI}/countries/all`)
			.then(({data}) => dispatch({
				type: "GET_ALL_COUNTRIES",
				payload: data
			}))
	}
}

export function displayActivityForm() {
	return {
		type: "DISPLAY_ACTIVITY_FORM"
	}
}