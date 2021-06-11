import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import Country from "../Country/Country";
import styles from './Countries.module.css';

export default function Countries() {
	const loadedCountries = useSelector(state => state.loadedCountries);
	return (
		<div className = {styles.container}>
			{
				loadedCountries.map(country => {
					return (
						<div key = {country.id}>
							<Country
								countryName = {country.name}
								countryContinent = {country.continent}
								countryFlag = {country.flag}
								countryID = {country.id}
							/>
						</div>
					)
				})
			}
		</div>
	)
}