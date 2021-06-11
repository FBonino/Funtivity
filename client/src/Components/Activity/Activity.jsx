import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayActivityForm } from "../../Actions";
import styles from './Activity.module.css';
import axios from "axios";



export default function Activity() {
	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState({name: '', difficulty: 1, duration: 1, season: "SUMMER", countries: []});
	const countries = useSelector(state => state.allCountries);

	function handleChange(event) {
		let temp = {...formValues};
		temp[event.target.name] = event.target.value;
		setFormValues(temp);
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(formValues);
		axios.post('http://localhost:3001/activity', {...formValues, countries: formValues.countries.join(',')})
	}

	return (
		<div>
			<div className = {styles.blur}></div>
			<div className = {styles.container}>
				<button onClick = {() => dispatch(displayActivityForm())}> X </button>
				<form onSubmit = {event => handleSubmit(event)}>
					<div className = {styles.formInput}>
						<label> Name </label> 
						<input placeholder = "name..." name = "name" defaultValue = {formValues.name} onChange = {event => handleChange(event)}/>
					</div>
					<div className = {styles.formInput}>
						<label> Difficulty </label> 
						<select defaultValue = '1' name = "difficulty" defaultValue = {formValues.difficulty} onChange = {event => handleChange(event)}>
							<option> 1 </option>
							<option> 2 </option>
							<option> 3 </option>
							<option> 4 </option>
							<option> 5 </option>
						</select>
					</div>
					<div className = {styles.formInput}>
						<label> Duration </label> 
						<input placeholder = "duration..." name = "duration" defaultValue = {formValues.duration} onChange = {event => handleChange(event)}/>
					</div>
					<div className = {styles.formInput}>
						<label> Season </label> 
						<select defaultValue = "SUMMER" name = "season" defaultValue = {formValues.season} onChange = {event => handleChange(event)}>
							<option> SUMMER </option>
							<option> WINTER </option>
							<option> SPRING </option>
							<option> FALL </option>
						</select>
					</div>
					<div className = {styles.formInput}>
						<label> Countries </label>
						<select name = "countries" defaultValue = "-" onChange = {event => {let temp = {...formValues}; temp.countries = [...formValues.countries, event.target.value]; setFormValues(temp); event.target.value = '-'}}>
							<option> - </option>
							{
								countries.map(country => {
										return <option key = {country.name}> {country.name} </option>
								})
							}
						</select>
					</div>
					<input type = "submit" />
				</form>
			</div>
		</div>
	)
}