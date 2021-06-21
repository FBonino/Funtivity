import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountries } from "../../Actions";
import styles from './Searchbar.module.css';

export default function Searchbar() {
	const dispatch = useDispatch();
	const loadedCountries = useSelector(state => state.loadedCountries);
	const [formValues, setFormValues] = useState({name: '', filter: ["Continent", "All"], order: ["name", "ASC"], offset: 0});
	useEffect(() => dispatch(filterCountries(formValues)), [formValues]);

	function handleChange(event) {
		let temp = {...formValues, offset: 0};
		temp[event.target.name] = event.target.value;
		setFormValues(temp);
	}

	function handleChangeOrder(event) {
		let index = event.target.name === "orderCategory" ? 0 : 1;
		let temp = {...formValues, offset: 0};
		temp.order[index] = event.target.value;
		setFormValues(temp);
	}

	function handleChangeFilter(event) {
		let index = event.target.name === "filterCategory" ? 0 : 1;
		let temp = {...formValues, offset: 0};
		temp.filter[index] = event.target.value;
		setFormValues(temp);
	}

	function handlePages(event) {
		let temp = {...formValues}; 
		temp.offset += event.target.name === "next" ? 1 : -1;
		setFormValues(temp);
	}

	return (
		<div>
			<div className = {styles.container}>
				<form className = {styles.form} onSubmit = {event => event.preventDefault()} autocomplete="off">
					<div>
						<input className = {styles.reset} type= "reset" onClick = {() => setFormValues({name: '', filter: ["Continent", "All"], order: ["name", "ASC"], offset: 0})}/>
					</div>
					<div>
						<input className = {styles.nameInput} name = "name" placeholder = "Country..." onChange = {event => handleChange(event)} />
					</div>
					<div>
						<label> Filter by: </label>
						<select name = "filterCategory" defaultValue = 'Continent' onChange = {event => handleChangeFilter(event)}>
							<option> Continent </option>
							<option> Activities </option>
						</select>
						{
							formValues.filter[0] === "Continent"
							? <select name = "continent" defaultValue = 'All' onChange = {event => handleChangeFilter(event)}>
									<option> All </option>
									<option> Americas </option>
									<option> Europe </option>
									<option> Asia </option>
									<option> Africa </option>
									<option> Oceania </option>
									<option> Polar </option>
								</select>
							: <select name = "difficulty" defaultValue = 'All' onChange = {event => handleChangeFilter(event)}>
									<option> All </option>
									<option> 1 </option>
									<option> 2 </option>
									<option> 3 </option>
									<option> 4 </option>
									<option> 5 </option>
								</select>
						}					
					</div>
					<div>
						<label> Order by: </label>
						<select name = "orderCategory" defaultValue = 'name' onChange = {event => handleChangeOrder(event)} >
							<option> name </option>
							<option> population </option>
						</select>
						<select name = "orderBy" defaultValue = 'ASC' onChange = {event => handleChangeOrder(event)} >
							<option> ASC </option>
							<option> DESC </option>
						</select>
					</div>
				</form>
			</div>
			<div className = {styles.page}>
				{formValues.offset > 0 ? <button name = "previous" onClick = {event => handlePages(event)}> ⬅ </button> : null}
				{loadedCountries.length === 10 ? <button name = "next" onClick = {event => handlePages(event)}> ➡ </button> : null}
			</div>
		</div>
	)
}