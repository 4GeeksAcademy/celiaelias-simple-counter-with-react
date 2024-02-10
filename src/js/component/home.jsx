import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../styles/index.css";
import "../icons";

function SimpleCounter() {
	const [counter, setCounter] = React.useState(0);
  
	React.useEffect(() => {
	  const intervalId = setInterval(() => {
		setCounter((prevCounter) => prevCounter + 1);
	  }, 1000);
  
	  return () => clearInterval(intervalId);
	}, []);
  
	const digitFour = Math.floor((counter / 1000) % 10);
	const digitThree = Math.floor((counter / 100) % 10);
	const digitTwo = Math.floor((counter / 10) % 10);
	const digitOne = Math.floor(counter % 10);
  
	return (
	  <React.Fragment>
		  <div className="bigCounter">
			  <div className="clock">
				  <FontAwesomeIcon icon={['far', 'clock']} /> {/* Usa el icono faClock */}
			  </div>
			  <div className="four">{digitFour}</div>
			  <div className="three">{digitThree}</div>
			  <div className="two">{digitTwo}</div>
			  <div className="one">{digitOne}</div>
		  </div>
	  </React.Fragment>
	);
  }

export default SimpleCounter;
