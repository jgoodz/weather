import React, { Component } from 'react';
import { connect } from 'react-redux';


//export default 
class WeatherList extends Component {
	renderWeather(cityDate) {
		const name = cityData.city.name;

		return (
			<tr key={name}>
				<td>{name}</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>

		);
	}
}


function mapStateToProps({ weather }) { //es6 syntax
	return { weather }; //es6 syntax. === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);