Funtivity

### About

<p style = "margin: 0 30px"> Project created during Henry's bootcamp as an individual examination instance. Using the [Rest Countries API](https://restcountries.eu/rest/v2/all) I created a database, backend and frontend and later deployed the SPA (single page application) to Vercel, Heroku and ElephantSQL. The app allows the user to add activities (with their difficulty, duration and season when it can be done) and asign them to any country, search for a country by it's name, filter by continent or activity difficulty, order results alphabetically or by the cities population(both ascending and descending), and access a country's details with the activities it has included. </p>

</br>

### Tecnologies

<table width = "70%" align = "center" border = "2px">
	<tr>
		<th style = "text-align: center;"> Frontend </th>
		<th style = "text-align: center;"> Backend </th>
		<th style = "text-align: center;"> Database </th>
	</tr>
	<tr>
		<td>
			<div style = "display: flex; justify-content: space-evenly; margin-top: 10px;"> <p> ReactJS </p> <p> Redux </p> </div>
			<div style = "display: flex; justify-content: space-evenly;"> <p> HTML </p> <p> CSS </p> </div>
		</td>
		<td>
			<p align = "center" style = "margin-top: 10px;"> NodeJS </p> 
			<p align = "center"> Express </p>
		</td>
		<td>
			<p align = "center" style = "margin-top: 10px;"> PostgreSQL </p> 
			<p align = "center"> Sequelize </p>
		</td>
	</tr>
</table>

</br>

### Flow

<p style = "margin: 0 30px"> As the landing page is loaded a request to the backend is sent and the database is filled with the countries and their detail fetched from the API. Later, for the results shown in the home page, by default or after applying a filter/order/search, the loaded countries state (contained in a Redux store) updates with the data coming from requests to the backend using url query parameters to get the information the user is looking for. If a user creates an activity a post request is sent that creates an activity or updates it, if it already existed, with the information in the request's body. Finally, when clicking on a country's flag the detail's data comes from the backend where both tables (countries and activities) are joined to get the country's detail and it's activities. </p>

</br>

### Preview snapshots

<table width = "60%" align = "center">
	<tr>
		<th> Countries list with filters and orders applied </th>
		<th> Country detail with activity list </th>
	</tr>
	<tr>
		<td> <img src = "./assets/countries1.png" alt = "" width = "100%"> </td>
		<td> <img src = "./assets/countries2.png" alt = "" width = "100%"> </td>
	</tr>
</table>

</br>

### Preview usage

<table width = "60%" align = "center">
	<tr>
		<th> Search a country by name and filter and order results </th>
		<th> Open city detail and add an activity </th>
	</tr>
	<tr>
		<td> <img src = "./assets/countries3.gif" alt = "" width = "100%"> </td>
		<td> <img src = "./assets/countries4.gif" alt = "" width = "100%"> </td>
	</tr>
</table>

</br>

### Future updates

* Fix bugs (activities not showing as soon as they are created in the detail tab)
* Fix responsiveness (style looks bad at some resolutions)
* Add more features (possibly integrating other APIs) such as country's weather in the detail
* Add _About_ section including information about the project and links to GitHub/LinkedIn