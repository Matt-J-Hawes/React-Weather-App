//DEPENDENCIES
import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

//NECESSARY COMPONENTS
import Header from './components/Header';
import Temperature from './components/Temperature';
import apiKey from './apiKey/config';

class App extends Component {

    state = {
    	tempCelcius: [],
    	tempFahrenheit: [],
    	wind: [],
    	weather: [],
    	city: '',
    }

    componentDidMount(){
    	this.getWeather()
    }
    
    //Use 'axios' to retrieve data from weather api 
    getWeather(name = 'london'){
	    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`)
	      .then(res => 
              this.setState({
              	  tempCelcius: Number.parseFloat(res.data.main.temp - 273.15).toFixed(1),
              	  tempFahrenheit: Number.parseFloat((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1),
              	  wind: res.data.wind.speed,
              	  weather: res.data.weather[0].main,
              	  city: res.data.name
            })
	    )
	      .catch(error => console.log(error, 'Problem fetching data from Api'))
	};

    /* Dynamic Search feature - take user input &
    callback 'getWeather' function to generate new results */
	getNewDestination(e){
		e.preventDefault()
		const newPlace = this.newPlace.value
			if(newPlace !== ''){
				this.getWeather(newPlace)
			};
		this.newPlace.value = ''
	};

	render(){
	  return (
	    <div className="App">
	      <Header />
	      <form onSubmit= {e => this.getNewDestination(e)}>
	      	<input ref = {input => this.newPlace = input} type="text" placeholder="Amsterdam..."></input>
	      	<button onClick= {e => this.getNewDestination(e)}>&#x1F50D;</button>
	      </form>
	      <Temperature 
	         tempCelcius = {this.state.tempCelcius}
	         tempFahrenheit = {this.state.tempFahrenheit}
	         desc = {this.state.weather}
	         wind = {this.state.wind}
	         city = {this.state.city}
	      />
	    </div>
	  );
	}
}

export default App;
