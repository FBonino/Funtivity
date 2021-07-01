import React, { useEffect } from "react";
import Countries from "../Countries/Countries";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, getCountries } from "../../Actions";
import Searchbar from "../Searchbar/Searchbar";
import Activity from "../Activity/Activity";

export default function Home() {
	const dispatch = useDispatch();
	const displayForm = useSelector(state => state.displayForm);
	useEffect(() => {
		dispatch(getCountries());
		dispatch(getAllCountries());
	}, []);
	return (
		<div>
			<Searchbar />
			{
				displayForm ? <Activity /> : null
			}
			<Countries />
		</div>
	)
}