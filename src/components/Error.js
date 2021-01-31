import React from 'react';
import Umbrella from '../images/umbrella.png'

const ErrorMessage = () => {
	return(
		<div className = "error">
		  We could not find that location! Please try again...
		 <img className = "error_img" src={Umbrella} alt = 'Not Found'/>
		</div>
	);
};

export default ErrorMessage