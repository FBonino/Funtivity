import axios from 'axios';

// const BACKEND_URI = 'https://funtivity.herokuapp.com';
const BACKEND_URI = 'http://localhost:3001';

export function getCountries() {
	return function (dispatch) {
		return axios.get(`${BACKEND_URI}/countries`)
			.then(({ data }) => dispatch({
				type: "GET_COUNTRIES",
				payload: data
			}))
	}
}

export function getCountryByID(countryID) {
	return function (dispatch) {
		return axios.get(`${BACKEND_URI}/countries/${countryID}`)
			.then(({ data }) => dispatch({
				type: "GET_COUNTRY_BY_ID",
				payload: data
			}))
	}
}

export function filterCountries({ name, filter, order, offset }) {
	return function (dispatch) {
		return axios.get(`${BACKEND_URI}/countries?name=${name}&filter=${filter}&order=${order}&offset=${offset}`)
			.then(({ data }) => dispatch({
				type: "FILTER_COUNTRIES",
				payload: data
			}))
			.catch(() => alert("Country not found"))
	}
}

export function getAllCountries() {
	return function (dispatch) {
		return axios.get(`${BACKEND_URI}/countries/all`)
			.then(({ data }) => dispatch({
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