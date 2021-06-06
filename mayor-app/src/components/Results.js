import React, { useState } from 'react';
import '../Styling/App.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Geocode from "react-geocode"
import Tabletop from 'tabletop';


class Results extends React.Component {
    constructor() {
      super()
      this.setUpGeoCode();
      this.state = {

        resourceData: [],
        validRecources: [],
        hasLoaded: false,
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false,

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
      
    }

    onMarkerClick = (props, marker) =>
      this.setState({
        activeMarker: marker,
        selectedPlace: props,
        showingInfoWindow: true
      });

    onInfoWindowClose = () =>
        this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });

    onMapClicked = () => {
      if (this.state.showingInfoWindow)
        this.setState({
          activeMarker: null,
          showingInfoWindow: false
        });
      };

    //Get data from survey and google sheets
    componentDidMount(){
        Tabletop.init({
          key: '1XrmXfbWx_oWC0sqOIdfZzPFIMinkiiijyUAKy2FUXw4',
          callback: googleData => {
            this.setState(prevState => ({
              resourceData: googleData,
              householdProperties: JSON.parse(localStorage.getItem('householdProperties')),
              desiredFoodType: JSON.parse(localStorage.getItem('desiredFoodType')),
              locationDetails: JSON.parse(localStorage.getItem('locationDetails')),
              weeklyAvailability: JSON.parse(localStorage.getItem('weeklyAvailability')),
              hasLoaded: true
            }))
            console.log('google sheet data --->', googleData)
          },
          simpleSheet: true
        })
        
    }

    findLocations(){

    }

    
    render() {
      const {resourceData} = this.state
      if (!this.state.hasLoaded){
        return <div />
      }


        return (
            <div>
                {/*First Main Section  */}
                <div className="Container">
                    <h1 className="display-3">Results</h1>
		                
                    <Map
                        google={this.props.google}
                        zoom={15}
                        style={mapStyles}
                        
                        
                        initialCenter={{lat: resourceData[0].Lat, lng: resourceData[0].Lng}}
                    >  
                    {
                        resourceData.map((resource) => (
                            <Marker
                              name={resource.Name}
                              description={resource.Description}
                              address={resource.Address}
                              email={resource.Email}
                              resourceType={resource.Type}
                              foodType={resource.FoodType}
                              position={{lat: resource.Lat, lng: resource.Lng}} 
                              onClick={this.onMarkerClick}
                            />
                        ))
                    }
                    <InfoWindow
                      marker={this.state.activeMarker}
                      onClose={this.onInfoWindowClose}
                      visible={this.state.showingInfoWindow}
                    >
                      <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                      </div>
                    </InfoWindow>

                      
                    
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

  addMarkers(){
    const {resourceData} = this.state
    return (
      <div> {
          resourceData.map(resource => {



          })
        }
      </div>
    )
  }
}
const mapStyles = {
    width: '100%',
    height: '70%',
  };


  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAZNY02jemZ0JuL9QauPxeggJB7EDShTo8'
  })(Results);
