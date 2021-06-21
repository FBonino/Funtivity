import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByID } from "../../Actions";
import styles from './Detail.module.css';
import Activity from "../Activity/Activity";

export default function Detail({match}) {
	const dispatch = useDispatch();
	const [detailedCountry, displayForm] = useSelector(state => [state.detailedCountry, state.displayForm]);
	useEffect(() => dispatch(getCountryByID(match.params.id)), [detailedCountry]);
	return (
		<div className = {styles.container}>
			<div className = {styles.detail}>
				<h2> {detailedCountry.name}, {detailedCountry.id} </h2>
				<h4> Continent: {detailedCountry.continent} </h4>
				<h4> Capital: {detailedCountry.capital ? detailedCountry.capital : '-'} </h4>
				<h4> Subregion: {detailedCountry.subregion ? detailedCountry.subregion : '-'} </h4>
				<h4> Area: {detailedCountry.area} m²</h4>
				<h4> Population: {detailedCountry.population} </h4>
				<img className = {styles.flag} src = {detailedCountry.flag} alt = "" />
			</div>
			<div className = {styles.activityTable}>
				<h3> Activities </h3>
				<table>
					<tr>
						<th className = {styles.name}> Name </th>
						<th> Difficulty[1-5] </th>
						<th> Duration (days) </th>
						<th> Season </th>
					</tr>
					{
						detailedCountry.activities?.length
						? detailedCountry.activities?.map(activity => {
							return (
								<tr key = {activity}>
									<td className = {styles.name}> {activity.name} </td>
									<td className = {styles.toRight}> {activity.difficulty} </td>
									<td className = {styles.toRight}> {activity.duration} </td>
									<td> {activity.season} </td>
								</tr>
							)
						})
						: <h4> No activities found </h4>
					}
				</table>
				{
					displayForm ? <Activity /> : null
				}
				</div>
		</div>
	)
}