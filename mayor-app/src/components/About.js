import React, { useState } from 'react';
import '../Styling/About.css';
import vanderbilt from "../images/vanderbilt.png";
import changePlusPlus from "../images/changePlusPlus.png";
import unitedWay from "../images/unitedWay.png";


class About extends React.Component {
    
    render(){
        return (
            <div className="AboutTextContainer"> <center>
		<h1>About Us</h1>
		<img className="vanderbiltImg" src={vanderbilt} /> &nbsp; &nbsp;
		<img className="changePlusPlusImg" src={changePlusPlus} /> &nbsp; &nbsp;
		<img className="unitedWayImg" src={unitedWay} />
                <p>
		This website was created to help people in Nashville find essential resources near them. Taking our find food survey is a quick and easy way to find food resources available in your area that match your needs. Working in collaboration with a group of students at Vanderbilt University and United Way of Greater Nashville.
                </p>
                <p>
		Did you have trouble finding a resource, or find any incorrect information? Please email <a href="mailto: Annika.victorson@unitedwaygn.org">Annika.victorson@unitedwaygn.org</a> so that we can update the website, or if you have any questions, concerns or feedback for us to consider.
                </p>
            </center> </div>
        );
    }
}

export default About;
