import axios from 'axios';

const API_KEY = '95798dbe11aaa19a5400a7fa019e8ad9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//http://api.openweathermap.org/data/2.5/forecast?appid=95798dbe11aaa19a5400a7fa019e8ad9&q=London,uk

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}