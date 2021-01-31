//DEPENDENCIES
import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

//NECESSARY COMPONENTS
import Header from './components/Header';
import Temperature from './components/Temperature';
import Loading from './components/Loading';
import ErrorMessage from './components/Error'
import apiKey from './apiKey/config';

class App extends Component {

    state = {
    	tempCelcius: [],
    	tempFahrenheit: [],
    	celciusMax: [],
    	celciusMin: [],
    	fahreMin: [],
    	fahreMax: [],
    	wind: [],
    	weather: [],
    	city: '',
    	loading: true,
    	errorMessage: ''
    }

    componentDidMount(){
    	this.getWeather()
    }
    
    //Use 'axios' to retrieve data from weather api 
    getWeather(name = 'london'){
    	this.setState({loading: true}, () => {
		    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`)
		      .then(res => 
	              this.setState({
	              	  tempCelcius: Number.parseFloat(res.data.main.temp - 273.15).toFixed(1),
	              	  tempFahrenheit: Number.parseFloat((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1),
	              	  celciusMax: Number.parseFloat(res.data.main.temp_max - 273.15).toFixed(1),
	              	  celciusMin: Number.parseFloat(res.data.main.temp_min - 273.15).toFixed(1),
	              	  fahreMax:  Number.parseFloat((res.data.main.temp_max - 273.15) * 9/5 + 32).toFixed(1),
	              	  fahreMin:  Number.parseFloat((res.data.main.temp_min - 273.15) * 9/5 + 32).toFixed(1),
	              	  wind: res.data.wind.speed,
	              	  weather: res.data.weather[0].main,
	              	  city: res.data.name,
	              	  loading: false,
	              	  errorMessage: ''
	            })
		    )
		      .catch(error => this.setState({errorMessage: error.message, loading: false}))
		 });
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
	      {this.state.errorMessage ? <ErrorMessage /> : null}
	      {this.state.loading ? <Loading /> : null}
	      {!this.state.loading && !this.state.errorMessage ?
		      <Temperature 
		         tempCelcius = {this.state.tempCelcius}
		         tempFahrenheit = {this.state.tempFahrenheit}
		         celciusMin = {this.state.celciusMin}
		         celciusMax = {this.state.celciusMax}
		         fahreMin = {this.state.fahreMin}
		         fahreMax = {this.state.fahreMax}
		         desc = {this.state.weather}
		         wind = {this.state.wind}
		         city = {this.state.city}
		      />
		      : null
		  }
	    </div>
	  );
	}
}

export default App;
