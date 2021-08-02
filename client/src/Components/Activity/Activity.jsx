import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayActivityForm } from "../../Actions";
import styles from './Activity.module.css';
import axios from "axios";

export default function Activity() {
	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState({ name: '', difficulty: 1, duration: 1, season: "SUMMER", countries: [] });
	const countries = useSelector(state => state.allCountries);

	function handleChange(event) {
		let temp = { ...formValues };
		temp[event.target.name] = event.target.value;
		setFormValues(temp);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		// await axios.post('https://funtivity.herokuapp.com/activity', {...formValues, countries: formValues.countries.join(',')});
		await axios.post('http://localhost:3001/activity', { ...formValues, countries: formValues.countries.join(',') });
		dispatch(displayActivityForm());
	}

	function addCountry(event) {
		let temp = { ...formValues };
		temp.countries = [...formValues.countries, event.target.value];
		event.target.value = '-';
		setFormValues(temp);
	}

	function removeCountry(event) {
		let temp = { ...formValues };
		temp.countries = temp.countries.filter(country => country !== event.target.value);
		setFormValues(temp);
	}

	return (
		<div>
			<div className={styles.blur}></div>
			<div className={styles.container}>
				<div className={styles.close}>
					<button className={styles.closeButton} onClick={() => dispatch(displayActivityForm())}> ✖ </button>
				</div>
				<form onSubmit={event => handleSubmit(event)} autoComplete="off">
					<div className={styles.formInput}>
						<label> Name </label>
						<input className={styles.nameInput} type="text" name="name" defaultValue={formValues.name} onChange={event => handleChange(event)} required />
					</div>
					<div className={styles.formInput}>
						<label> Difficulty </label>
						<select name="difficulty" defaultValue={formValues.difficulty} onChange={event => handleChange(event)}>
							<option> 1 </option>
							<option> 2 </option>
							<option> 3 </option>
							<option> 4 </option>
							<option> 5 </option>
						</select>
					</div>
					<div className={styles.formInput}>
						<label> Duration </label>
						<div>
							<input className={styles.durationInput} name="duration" defaultValue={formValues.duration} onChange={event => handleChange(event)} pattern="[1-9][0-9]*" title="The duration must be a number and greater than 0" required />
							<label> days </label>
						</div>
					</div>
					<div className={styles.formInput}>
						<label> Season </label>
						<select name="season" defaultValue={formValues.season} onChange={event => handleChange(event)}>
							<option> SUMMER </option>
							<option> WINTER </option>
							<option> SPRING </option>
							<option> FALL </option>
						</select>
					</div>
					<div className={styles.formCountries}>
						<label> Countries </label>
						<select name="countries" defaultValue="-" onChange={event => addCountry(event)}>
							<option> - </option>
							{
								countries.map(country => {
									return <option key={country.name}> {country.name} </option>
								})
							}
						</select>
						<div className={styles.countries}>
							{
								formValues.countries?.map(country => {
									return <div className={styles.countryName}> <input value={country} key={country} onClick={event => removeCountry(event)} /> </div>
								})
							}
						</div>
					</div>
					<div className={styles.submit}>
						<input type="submit" value="➕" />
					</div>
				</form>
			</div>
		</div>
	)
}