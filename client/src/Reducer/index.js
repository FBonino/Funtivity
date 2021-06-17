let initialState = {
	allCountries: [],
	loadedCountries: [],
	detailedCountry: {},
	displayForm: false
};

export default function rootReducer(state = initialState, action) {
	switch(action.type) {
		case "GET_COUNTRIES": 
			return {
				...state,
				loadedCountries: action.payload
			}
		case "GET_COUNTRY_BY_ID":
			return {
				...state,
				detailedCountry: action.payload
			}
		case "FILTER_COUNTRIES":
			return {
				...state,
				loadedCountries: action.payload
			}
		case "GET_ALL_COUNTRIES":
			return {
				...state,
				allCountries: action.payload
			}
		case "DISPLAY_ACTIVITY_FORM":
			return {
				...state,
				displayForm: !state.displayForm
			}
		default:
			return state;
	}
}