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

        householdProperty: [],
        foodType: [],
        weekAvailability: [],

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
              resourceData: [],
              
              validRecources: [],
              householdProperty: JSON.parse(localStorage.getItem('householdProperty')),
              foodType: JSON.parse(localStorage.getItem('foodType')),
              weekAvailability: JSON.parse(localStorage.getItem('weekAvailability')),
              householdProperties: JSON.parse(localStorage.getItem('householdProperties')),
              desiredFoodType: JSON.parse(localStorage.getItem('desiredFoodType')),
              locationDetails: JSON.parse(localStorage.getItem('locationDetails')),
              weeklyAvailability: JSON.parse(localStorage.getItem('weeklyAvailability')),
            }))
            console.log('google sheet data --->', googleData);
            for (var i = 0; i < googleData.length; i++)
                this.getLatLng(googleData[i]);

          },
          simpleSheet: true
        })
        
        
    }

    setUpGeoCode(){
      Geocode.setApiKey("AIzaSyAZNY02jemZ0JuL9QauPxeggJB7EDShTo8");
      Geocode.setLanguage("en");
    }

    getLatLng(addy){
      Geocode.fromAddress(addy.Address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          const coords = {lat: lat, lng: lng};
          this.setState(prevState => ({
            ...prevState,
            resourceData: prevState.resourceData.concat({
                ...addy,
                position: coords
            })
          }));
        },
        (error) => {
          console.error(error);
        }
      );
    }
    
    render() {
      const {resourceData, validRecources} = this.state
      if (resourceData.length == 0){
        return (
          <div>
            <h1 className="LoadingHeader">Loading</h1>
          </div>
        )
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
                      
                      initialCenter={resourceData[0].position}
                >  
                  {
                      resourceData.map((resource) => (
                        
                          <Marker
                            name={resource["Food Resource Name"]}
                            description={resource["Description / Other Info"]}
                            address={resource.Address + ", " + resource["Zip Code"]}
                            email={resource["Email Address"]}
                            contactInfo={resource["Website / Contact Info"]}
                            resourceType={resource["Type"]}
                            foodType={resource["Food Type"]}
                            //position={{lat: resource.Lat, lng: resource.Lng}} 
                            position= {this.getLatLng(resource.Address)}
                            weekAvailability={resource["Available Pickup Days"]}
                            householdInfo={resource["Check the following that apply to your resource:"]}
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
                      <h1>{this.state.selectedPlace.name}</h1>
                      <h3>{this.state.selectedPlace.address}</h3>
                      <p>{this.state.selectedPlace.description}</p>
                      <p>Food Type: {this.state.selectedPlace.foodType}</p>
                      <p>Available: {this.state.selectedPlace.weekAvailability}</p>
                      <h4>Contact Info:</h4>
                      <p>{this.state.selectedPlace.email}</p>
                      <p>{this.state.selectedPlace.contactInfo}</p>
                    </div>
                  </InfoWindow>

                    
                  
                  </Map>
              </div>
              <p>{this.state.householdProperties.olderThan60}</p>
          </div>
      );
    }




  filterResources(arr1){
    //Filter resources here
    return arr1;
   }


  hasMatch(arr1, arr2){
    console.log(arr1 + "vs" + arr2);
    for (var i =0; i < arr1.length; i++){
      if (arr2.includes(arr1[i])){
        return true
      }
    }
    return false
  }
}
const mapStyles = {
    width: '100%',
    height: '70%',
  };


  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAZNY02jemZ0JuL9QauPxeggJB7EDShTo8'
  })(Results);
