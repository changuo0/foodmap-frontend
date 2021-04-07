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
  callback([{"name":"510 Foundation","contact":"615-255-1289","notes":"","location":"510 Woodland St., Nashville, TN","zip":37206,"foodtype":"Soup Kitchen, Dinner","id":20},{"name":"Community Care Fellowship","contact":"615-227-1953","notes":"","location":"511 South 8th Street, Nashville, TN","zip":37206,"foodtype":"Soup Kitchen / Youth Program, Breakfast/Lunch","id":21},{"name":"Catholic Charities / Loaves & Fishes","contact":"615-256-7256","notes":"","location":"508 Main Street, Nashville, TN","zip":37206,"foodtype":"Soup Kitchen, Breakfast/Lunch","id":22}])
}

class Results extends React.Component {
    constructor() {
      super()
      this.setUpGeoCode();
      this.state = { xmlReturn: ["no data yet..."] }
      makeDummyRequest("sheet",{"zip":"37206"}, (x) => this.setState({xmlReturn:x}))
      
    }
    render() {
        return (
            <div>
                {/*First Main Section  */}
                <div className="Container">
                    <h1 className="display-3">Results</h1>
		    <p>{JSON.stringify(this.state.xmlReturn)}</p>
                    <Map
                        google={this.props.google}
                        zoom={15}
                        style={mapStyles}
                        
                        initialCenter={{ lat: 36.14417, lng: -86.80971}}
                    >  
                    <Marker position={{ lat: 36.14417, lng: -86.80971}} />
                    </Map>
                </div>
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
