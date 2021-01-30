//DEPENDENCIES
import React from 'react';

//COMPONENTS
import useToggle from './Toggle'

//WEATHER IMAGES
import clouds from '../images/clouds.png';
import sun from '../images/sun.png';
import drizzle from '../images/drizzle.png';
import snow from '../images/snow.png'

const Temperature = (props) => {
    const tempCelcius = props.tempCelcius
    const tempFahrenheit = props.tempFahrenheit
    const desc = props.desc
    const wind = props.wind
    const city = props.city
    //Call useToggle function to switch between °C & °F
    const [isOn, toggleIsOn] = useToggle();

	return(
       <div className = "weather_container">
       <h3>{city}</h3>
       <p className = "description">({desc})</p>
         <div onClick = {toggleIsOn} >
       	     {isOn ? 
       	     	<h2>{tempCelcius}°C<span className = 'degrees'>|°F</span></h2> : 
       	     	<h2>{tempFahrenheit}°F <span className = 'degrees'>|°C</span></h2>}
       	 </div>
       	 <div className = "weather_images">
	       	 {desc.includes('Clouds')  ? 
	       	 <img className = "clouds" src={clouds} alt="clouds"/> 
	       	 : null }
	       	 {desc.includes('Drizzle') || desc.includes('Rain') ? 
             <img className = "clouds" src={drizzle} alt="drizzle"/>
	       	 : null }
	       	 {desc.includes('Snow') ? 
             <img className = "clouds" src={snow} alt="drizzle"/>
	       	 : null }
	       	 {tempCelcius >= 20 ? 
	       	 <img src={sun} alt="sun" />
	       	 :null }
       	 </div>
       	   <hr/>
       	   <p>The current wind speed in <span> {city} </span> is <span>{wind} mph </span></p>
       </div>
	);
};

export default Temperature;