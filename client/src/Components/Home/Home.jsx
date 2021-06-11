import React, { useEffect } from "react";
import styles from './Home.module.css';
import Countries from "../Countries/Countries";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../Actions";
import Searchbar from "../Searchbar/Searchbar";
import Activity from "../Activity/Activity";

export default function Home() {
	const dispatch = useDispatch();
	const displayForm = useSelector(state => state.displayForm);
	useEffect(() => dispatch(getCountries()), []);
	return (
		<div>
			<Searchbar />
			<Countries />
			{
				displayForm ? <Activity /> : null
			}
		</div>
	)
}