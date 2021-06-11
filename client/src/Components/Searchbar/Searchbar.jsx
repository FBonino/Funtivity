import React from "react";
import styles from './Searchbar.module.css';

export default function Searchbar() {
	return (
		<div>
			<input placeholder = "Country..." />
			<select defaultValue = 'All' >
				<option> All </option>
				<option> Americas </option>
				<option> Europe </option>
				<option> Asia </option>
				<option> Africa </option>
				<option> Oceania </option>
				<option> Polar </option>
			</select>
			<select defaultValue = '🔺'>
				<option> 🔺 </option>
				<option> 🔻 </option>
			</select>
		</div>
	)
}