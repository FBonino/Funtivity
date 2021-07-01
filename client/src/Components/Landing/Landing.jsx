import React from "react";
import { Link, useHistory } from 'react-router-dom';
import styles from './Landing.module.css';
import axios from 'axios';
import video from "../../media/FrancoPi.mp4";


axios.get('http://localhost:3001/start');

export default function Landing() {
	const history = useHistory();
	return (
		<div>
			<Link to = '/home'>
				<video className = {styles.video} autoPlay onEnded = {() => history.push('/home')}> 
					<source src = {video} type = "video/mp4" />
				</video>
			</Link>
		</div>
	)
}