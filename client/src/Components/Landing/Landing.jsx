import React from "react";
import { Link, useHistory } from 'react-router-dom';
import styles from './Landing.module.css';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../Actions";
import video from "../../media/FrancoPi.mp4";


var started = false;

export default function Landing() {
	const history = useHistory();
	const dispatch = useDispatch();
	if(!started)
		axios.get('http://localhost:3001/start').then(() => {
			started = true; 
			dispatch(getAllCountries());
		});
	return (
		<div className = {styles.container}>
			<Link className = {styles.link} to = '/home'>
				<video className = {styles.video} autoPlay onEnded = {() => history.push('/home')}> 
					<source src = {video} type = "video/mp4" />
				</video>
			</Link>
		</div>
	)
}