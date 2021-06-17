import React from "react";
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../Actions";

var started = false;

export default function Landing() {
	const dispatch = useDispatch();
	if(!started)
		axios.get('http://localhost:3001/start').then(() => {
			started = true; 
			dispatch(getAllCountries());
		});
	return (
		<div className = {styles.container}>
			<Link to = '/home'> Home </Link>
		</div>
	)
}