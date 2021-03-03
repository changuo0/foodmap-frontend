import React from 'react';
import '../App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';

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
  makeRequest("db",{"zip":"37206"}, (x) => alert("db req returned "+JSON.stringify(x)))
    render() {
        return (
            <div>
                {/*First Main Section  */}
                <div className="Container">
                    <h1 className="display-3">Results</h1>
                    <Map
                        google={this.props.google}
                        zoom={15}
                        style={mapStyles}
                        initialCenter={{ lat: 36.14417, lng: -86.80971}}
                    />
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
