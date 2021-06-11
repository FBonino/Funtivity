import React from "react";
import { Link } from 'react-router-dom';
import styles from './Country.module.css';

export default function Country({countryName, countryContinent, countryFlag, countryID}) {
	return (
		<Link to = {`/country/${countryID}`}> <div className = {styles.container}>
			<h3> {countryName} </h3>
			<h4> {countryContinent} </h4>
			<img src = {countryFlag} className = {styles.flag} />
		</div> </Link>
	)
}