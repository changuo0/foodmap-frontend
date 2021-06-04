import React from 'react';
import '../Styling/App.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode"

function makeRequest(sheetOrCal,params,callback) {
  const req = new XMLHttpRequest()
  req.addEventListener("load", () => {
    callback(JSON.parse(req.responseText))
  })
  let url = "/" + sheetOrCal + "/"
  for (var k in params)
    url += k + "=" + params[k] + "/"
  req.open("GET", url)
  req.send()
}

function makeDummyRequest(sheetOrCal,params,callback) {
  // sheetOrCal and params do nothing lol
  // calls the callback with sample data
  callback([ { "name": "bla bla bla resource 1", "description": "...", "contact": "website/contact info goes here", "type": "Food Pantry", "address": "2301 vanderbilt place nashville tn", "zip": 37240, "latitude": 36.146, "longitude": -86.8050, "deliveryServices": true }, { "name": "...", "description": "...", "contact": "...", "type": "Ready to Eat", "address": "...", "zip": 12345, "latitude": 34.56, "longitude": -24.283, "deliveryServices": false }])
}

class Results extends React.Component {
    constructor() {
      super()
      this.setUpGeoCode();
      this.state = {
        xmlReturn:[ { "name": "bla bla bla resource 1", "description": "...", "contact": "website/contact info goes here", "type": "Food Pantry", "address": "2301 vanderbilt place nashville tn", "zip": 37240, "latitude": 36.1486, "longitude": -86.8050, "deliveryServices": true }, { "name": "...", "description": "...", "contact": "...", "type": "Ready to Eat", "address": "...", "zip": 12345, "latitude": 0, "longitude":0, "deliveryServices": false }],
        householdProperties: {
            olderThan60: false,
            childrenUnder18: false,
            disability: false,
            singleParent: false,
            infantUnder2: false,
        },
        desiredFoodType:{
            freshFood: false,
            nonperishables: false,
            prepackagedMeals: false,
        },
        locationDetails:{
            zipCode: '',
            locationRadius: 0,
        },
        weeklyAvailability: {
            M: false,
            T: false,
            W: false,
            R: false,
            F: false,
            SA: false,
            SU: false,
          },
          availableLocations: []
      }
      
      makeDummyRequest("sheet",{"zip":"37206"}, (x) => this.setState({xmlReturn:x}))
    }
    
    componentDidMount(){
        this.setState(prevState => ({
          householdProperties: JSON.parse(localStorage.getItem('householdProperties')),
          desiredFoodType: JSON.parse(localStorage.getItem('desiredFoodType')),
          locationDetails: JSON.parse(localStorage.getItem('locationDetails')),
          weeklyAvailability: JSON.parse(localStorage.getItem('weeklyAvailability'))
        }))
        
    }

    findLocations(){

    }

    
    render() {
        return (
            <div>
                {/*First Main Section  */}
                <div className="Container">
                    <h1 className="display-3">Results</h1>
		                <p>{JSON.stringify(this.state.xmlReturn)}</p>
                    
                    <p>state: {this.state.locationDetails.locationRadius}</p>
                    <Map
                        google={this.props.google}
                        zoom={15}
                        style={mapStyles}
                        
                        //initialCenter={{ lat: "36.1486", lng:  "-86.8050"}}
                        initialCenter={{ lat: this.state.xmlReturn[0].latitude, lng: this.state.xmlReturn[0].longitude}}
                    >  
                    <Marker position={{ lat: this.state.xmlReturn[0].latitude, lng: this.state.xmlReturn[0].longitude}} />
                    </Map>
                </div>
                <p>{this.state.householdProperties.olderThan60}</p>
            </div>
        );
    }


  setUpGeoCode(){
    Geocode.setApiKey("AIzaSyAZNY02jemZ0JuL9QauPxeggJB7EDShTo8");
    Geocode.setLanguage("en");
  }
}
const mapStyles = {
    width: '100%',
    height: '70%',
  };


  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAZNY02jemZ0JuL9QauPxeggJB7EDShTo8'
  })(Results);
