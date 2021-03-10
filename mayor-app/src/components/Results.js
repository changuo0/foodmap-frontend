import React from 'react';
import '../Styling/App.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Results extends React.Component {
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