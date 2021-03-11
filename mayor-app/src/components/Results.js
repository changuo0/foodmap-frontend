import React from 'react';
import '../Styling/App.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function makeRequest(dbOrCal,params,callback) {
  const req = new XMLHttpRequest()
  req.addEventListener("load", () => {
    callback(JSON.parse(req.responseText))
  })
  let url = "/" + dbOrCal + "/"
  for (var k in params)
    url += k + "=" + params[k] + "/"
  req.open("GET", url)
  req.send()
}

class Results extends React.Component {
    constructor() {
      super()
      this.state = { xmlReturn: ["no data yet..."] }
      makeRequest("db",{"zip":"37206"}, (x) => this.setState({xmlReturn:x}))
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
}
const mapStyles = {
    width: '100%',
    height: '70%',
  };


  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAZNY02jemZ0JuL9QauPxeggJB7EDShTo8'
  })(Results);
