import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByID } from "../../Actions";
import styles from './Detail.module.css';
import Activity from "../Activity/Activity";

export default function Detail({match}) {
	const dispatch = useDispatch();
	useEffect(() => dispatch(getCountryByID(match.params.id)), []);
	const [detailedCountry, displayForm] = useSelector(state => [state.detailedCountry, state.displayForm]);
	return (
		<div className = {styles.container}>
			<h3> {detailedCountry.name}, {detailedCountry.id} </h3>
			<h4> Continent: {detailedCountry.continent} </h4>
			<h4> Capital: {detailedCountry.capital} </h4>
			<h4> Subregion: {detailedCountry.subregion} </h4>
			<h4> Area: {detailedCountry.area} m²</h4>
			<h4> Population: {detailedCountry.population} </h4>
			<img src = {detailedCountry.flag} alt = "" />
			<h4> Activities </h4>
			<table>
				<tr>
					<th> Name </th>
					<th> Difficulty[1-5] </th>
					<th> Duration(days) </th>
					<th> Season </th>
				</tr>
				{
					detailedCountry.activities?.map(activity => {
						return (
							<tr>
								<td> {activity.name} </td>
								<td className = {styles.toRight}> {activity.difficulty} </td>
								<td className = {styles.toRight}> {activity.duration} </td>
								<td> {activity.season} </td>
							</tr>
						)
					})
				}
			</table>
			{
				displayForm ? <Activity /> : null
			}
		</div>
	)
}