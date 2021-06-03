import React, { useState } from 'react';
import '../Styling/App.css';
import { I18nProvider, LOCALES } from '../i18n';
import translate from "../i18n/translate";
import { Route , withRouter} from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton'
import { event } from 'jquery';

class Survey extends React.Component {
    

    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            language: this.getLanguage(window.location.pathname),
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
            }
        }
    }


    getLanguage(props){
        
        if (props.substring(props.length-2,props.length)=="es"){
            return LOCALES.SPANISH;
        }
        if (props.substring(props.length-2,props.length)=="en"){
            return LOCALES.ENGLISH;
        }
        if (props.substring(props.length-2,props.length)=="de"){
            return LOCALES.GERMAN;
        }
        if (props.substring(props.length-2,props.length)=="fr"){
            return LOCALES.FRENCH;
        }
        if (props.substring(props.length-2,props.length)=="vi"){
            return LOCALES.VIETNAMESE;
        }
        if (props.substring(props.length-2,props.length)=="zh"){
            return LOCALES.CHINESE;
        }
    }

    //will need to look into how this is handled for non text input types
    handleTextFieldChange = event => {
        this.setState(prevState => ({
            locationDetails: {
                ...prevState.locationDetails,
                [event.target.name]: event.target.value
            }
        }))
        
    }

    handleCheckBoxChange = event => {
        if (this.state.currentStep == 1){
            this.setState(prevState => ({
                householdProperties: {
                    ...prevState.householdProperties,
                    [event.target.name]: !this.state.householdProperties[event.target.name] 
                }
            }))
        }
        if (this.state.currentStep == 2){
            this.setState(prevState => ({
                desiredFoodType: {
                    ...prevState.desiredFoodType,
                    [event.target.name]: !this.state.desiredFoodType[event.target.name] 
                }
            }))
        }

        if (this.state.currentStep == 4){
            this.setState(prevState => ({
                
                weeklyAvailability: {
                    ...prevState.weeklyAvailability,
                    [event.target.name]: !this.state.weeklyAvailability[event.target.name] 
                }
            }))
        }
    };

    handleRadioChange = event => {
        this.setState(prevState => ({
            locationDetails: {
                ...prevState.locationDetails,
                [event.target.name]: event.target.value
            }
        }))
    }


    handleSubmit = event => {
        event.preventDefault()
        const {householdProperties, desiredFoodType, locationDetails} = this.state
        localStorage.setItem('householdProperties', JSON.stringify(this.state.householdProperties));
        localStorage.setItem('desiredFoodType', JSON.stringify(this.state.desiredFoodType));
        localStorage.setItem('locationDetails', JSON.stringify(this.state.locationDetails));
        localStorage.setItem('weeklyAvailability', JSON.stringify(this.state.weeklyAvailability));
        
        window.open("/Results")
    }

    _next = () => {
        let currentStep = this.state.currentStep
        if (currentStep == 1){
            alert(`Survey details: \n 
            HouseHold Properties: \n
            ${this.state.householdProperties.olderThan60} \n
            ${this.state.householdProperties.childrenUnder18} \n
            ${this.state.householdProperties.disability} \n
            ${this.state.householdProperties.singleParent} \n
            ${this.state.householdProperties.infantUnder2} \n
            `)
        }
        if (currentStep == 2){
            alert(`Survey details: \n 
            Desired Food: \n
            ${this.state.desiredFoodType.nonperishables} \n
            ${this.state.desiredFoodType.freshFood} \n
            ${this.state.desiredFoodType.prepackagedMeals} \n
            `)
        }
        if (currentStep == 3){
            alert(`Survey details: \n 
            Location Details: \n
            ${this.state.locationDetails.zipCode} \n
            ${this.state.locationDetails.locationRadius} \n
            `)
        }
        if (currentStep == 4){
            alert(`Survey details: \n 
            Weekly Availability: \n
            ${this.state.weeklyAvailability.M} \n
            ${this.state.weeklyAvailability.T} \n
            ${this.state.weeklyAvailability.W} \n
            ${this.state.weeklyAvailability.R} \n
            ${this.state.weeklyAvailability.F} \n
            ${this.state.weeklyAvailability.SA} \n
            ${this.state.weeklyAvailability.SU} \n
            `)
        }


        currentStep = currentStep >= 4? 5: currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !==1){
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                    {translate('Previous')}
                </button>
            )
        }
        return null;
    }

    nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep < 4){
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}>
                    {translate('Next')}
                </button>
            )
        }
        return null;
    }

    render() {
        return (
            <I18nProvider locale={this.getLanguage(window.location.pathname)}>
                <React.Fragment>
                    <div style={{marginLeft:"10px"}}>
                        <h1 className='subDisplay'>Find Food Survey</h1>
                        <form onSubmit={this.handleSubmit}>
                            <Step1
                                currentStep={this.state.currentStep}
                                handleChange={this.handleCheckBoxChange}
                                householdProperties={this.state.householdProperties}
                            />
                            <Step2
                                currentStep={this.state.currentStep}
                                handleChange={this.handleCheckBoxChange}
                                desiredFoodType={this.state.desiredFoodType}
                            />
                            <Step3
                                currentStep={this.state.currentStep}
                                handleRadioChange={this.handleRadioChange}
                                handleTextFieldChange={this.handleTextFieldChange}

                                locationDetails={this.state.locationDetails}
                            />
                            <Step4
                                currentStep={this.state.currentStep}
                                handleChange={this.handleCheckBoxChange}
                                weeklyAvailability={this.state.weeklyAvailability}
                            />
                            {/* {this.previousButton()}  Comment Out for now. Going back interferes with state manipulation*/}
                            {this.nextButton()}

                        </form>
                    </div>
                </React.Fragment>
            </I18nProvider>
        );
    }
}



function Step1(props) {
    if (props.currentStep !== 1) {
        return null
    }
    return(
        <div className="form-group">
            <h5>{translate("Check all that apply to you or your household")}</h5>
            <input
                name="olderThan60"
                type="checkbox"
                onChange={props.handleChange} />
            <label>{translate("60 years or older")}</label>
            <br />
            <input
                name="childrenUnder18"
                type="checkbox"
                onChange={props.handleChange} />
            <label>{translate("Children 18 or younger")}</label>
            <br />
            <input
                name="disability"
                type="checkbox"
                onChange={props.handleChange} />
            <label>{translate("Disability that makes it difficult to leave the house")}</label>
            <br />
            <input
                name="singleParent"
                type="checkbox"
                onChange={props.handleChange} />
            <label>{translate("Single Parent")}</label>
            <br />
            <input
                name="infantUnder2"
                type="checkbox"
                onChange={props.handleChange} />
            <label>{translate("Infant 2 years or younger")}</label>
            <br />
        </div>
    );
}

function Step2(props) {
    if (props.currentStep !== 2) {
        return null
    }
    return(
        <div className="form-group">
            <h5>{translate("I am looking for...")}</h5>
            <input
                name="nonperishables"
                type="checkbox"
                onChange={props.handleChange} />
            <label>{translate("Non-Perishables")}</label>
            <br />
            <input
                name="freshFood"
                type="checkbox"
                onChange={props.handleChange} />
            <label>{translate("Fresh Food")}</label>
            <br />
            <input
                name="prepackagedMeals"
                type="checkbox"
                onChange={props.handleChange} />
            <label>{translate("Pre-Packaged Meals")}</label>
            <br />
        </div>
    );
}

function Step3(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return(
        <div className="form-group">
            <h5>{translate("Please enter your location details to help us search for the closest opportunities")}</h5>
            <h5>Zip:</h5>
            <input
                name="zipCode"
                type="text"
                value={props.locationDetails.zipCode}
                onChange={props.handleTextFieldChange} />

            <h5>{translate("I am looking for food within ...")} </h5>
            <input
                name="locationRadius"
                type="radio"
                value="1"
                onChange={props.handleRadioChange} />
            <label for="oneMile">1 {translate("mile")}</label>
            <br />
            <input
                name="locationRadius"
                value={3}
                type="radio"
                onChange={props.handleRadioChange} />
            <label htmlFor="threeMiles">3 {translate("miles")}</label>
            <br />
            <input
                name="locationRadius"
                value={5}
                type="radio"
                onChange={props.handleRadioChange} />
            <label htmlFor="fiveMiles">5 {translate("miles")} </label>
            <br />
            <input
                name="locationRadius"
                value={10}
                type="radio"
                onChange={props.handleRadioChange} />
            <label htmlFor="tenMiles">10 {translate("miles")} </label>
            <br />
            <input
                name="locationRadius"
                value={20}
                type="radio"
                onChange={props.handleRadioChange} />
            <label htmlFor="twentymiles">20 {translate("miles")} </label>
        </div>
    );
}

function Step4(props) {
    if (props.currentStep !== 4) {
        return null
    }
    return(
        <React.Fragment>
            <h5>{translate("I am available on these days for pickup:")} </h5>
            <input name="SU" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Sunday")}</label>
            <br />
            <input name="M" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Monday")} </label>
            <br />
            <input name="T" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Tuesday")}</label>
            <br />
            <input name="W" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Wednesday")}</label>
            <br />
            <input name="R" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Thursday")}</label>
            <br />
            <input name="F" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Friday")} </label>
            <br />
            <input name="SA" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Saturday")} </label>
            <br />"
            <button className="btn btn-success btn-block">{translate("Submit")}</button>
        </React.Fragment>
    );
}

function name(params) {
    
}

export default Survey;