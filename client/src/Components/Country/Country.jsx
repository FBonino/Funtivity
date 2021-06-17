import React from "react";
import { Link } from 'react-router-dom';
import styles from './Country.module.css';

export default function Country({countryName, countryContinent, countryFlag, countryID}) {
	return (
		<div className = {styles.container}>
			<h5 className = {`${styles.name} ${styles.info}`}> {countryName} </h5>
			<Link className = {styles.link} to = {`/country/${countryID}`}> 
				<div className = {styles.flag} style = {{backgroundImage: `url(${countryFlag})`}}></div> 
			</Link>
			<h5 className = {`${styles.country} ${styles.info}`}> {countryContinent} </h5>
		</div>
	)
}