import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { displayActivityForm } from "../../Actions";
import styles from './Nav.module.css';

export default function Nav() {
	const dispatch = useDispatch();
	return (
		<div className = {styles.container}>
			<Link to = '/home' className = {styles.link}> Home </Link>
			<button onClick = {() => dispatch(displayActivityForm())} className = {styles.addActivity}> Add activity </button>
		</div>
	)
}