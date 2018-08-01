const API_KEY = '95798dbe11aaa19a5400a7fa019e8ad9';
const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//const URL = 'https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=95798dbe11aaa19a5400a7fa019e8ad9';

export const FETCH_WEATHER = 'FETCH_WEATHER';


export default fetchWeather() {
	return {
		type: FETCH_WEATHER
	};
}