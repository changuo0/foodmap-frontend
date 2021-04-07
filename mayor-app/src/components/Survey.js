import React, { useState } from 'react';
import '../Styling/App.css';
import { I18nProvider, LOCALES } from '../i18n';
import translate from "../i18n/translate";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton'

class Survey extends React.Component {
    

    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            language: "",
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
                hotMeals: false,
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

    //will need to look into how this is handled for non text input types
    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        window.open("/Results")
    }

    _next = () => {
        let currentStep = this.state.currentStep
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
        if(currentStep < 5){
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
            <I18nProvider locale={this.state.language}>
                <React.Fragment>
                    <h1 className='subDisplay'>Find Food Survey</h1>
                    <form onSubmit={this.handleSubmit}>
                        <Step1
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            language={this.state.language}
                        />
                        <Step2
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            householdProperties={this.state.householdProperties}
                        />
                        <Step3
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            desiredFoodType={this.state.desiredFoodType}
                        />
                        <Step4
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            locationDetails={this.state.locationDetails}
                        />
                        <Step5
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            weeklyAvailability={this.state.weeklyAvailability}
                        />
                        {this.previousButton()}
                        {this.nextButton()}

                    </form>
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
            <label htmlFor="languages">Please select a language: </label>
            <select value = {props.language} onChange={props.handleChange}>
                <option value={LOCALES.ENGLISH} >English</option>
                <option value={LOCALES.SPANISH} selected="selected">Spanish</option>
                <option value={LOCALES.GERMAN}>German</option>
                <option value={LOCALES.FRENCH}>French</option>
            </select>
        </div>
    );
}

function Step2(props) {
    if (props.currentStep !== 2) {
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

function Step3(props) {
    if (props.currentStep !== 3) {
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
                name="freshfood"
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

function Step4(props) {
    if (props.currentStep !== 4) {
        return null
    }
    return(
        <div className="form-group">
            <h5>{translate("Please enter your location details to help us search for the closest opportunities")}</h5>
            <h5>Zip:</h5>
            <input
                name="zip"
                type="text"
                value={props.locationDetails.zipCode}
                onChange={props.handleChange} />

            <h5>{translate("I am looking for food within ...")} </h5>
            <input
                name="oneMile"
                type="radio"
                onChange={props.handleChange} />
            <label for="oneMile">{translate("1 mile")}</label>
            <br />
            <input
                name="threeMiles"
                type="radio"
                onChange={props.handleChange}/>
            <label htmlFor="threeMiles">{translate("3 miles")}</label>
            <br />
            <input
                name="fiveMiles"
                type="radio"
                onChange={props.handleChange}/>
            <label htmlFor="fiveMiles">{translate("5 miles")} </label>
            <br />
            <input
                name="tenMiles"
                type="radio"
                onChange={props.handleChange}/>
            <label htmlFor="tenMiles">{translate("10 miles")} </label>
            <br />
            <input
                name="twentymiles"
                type="radio"
                onChange={props.handleChange}/>
            <label htmlFor="twentymiles">{translate("20 miles")} </label>
        </div>
    );
}

function Step5(props) {
    if (props.currentStep !== 5) {
        return null
    }
    return(
        <React.Fragment>
            <h5>{translate("I am available on these days for pickup:")} </h5>
            <input name="sunday" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Sunday")}</label>
            <br />
            <input name="monday" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Monday")} </label>
            <br />
            <input name="tuesday" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Tuesday")}</label>
            <br />
            <input name="wednesday" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Wednesday")}</label>
            <br />
            <input name="thursday" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Thursday")}</label>
            <br />
            <input name="friday" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Friday")} </label>
            <br />
            <input name="saturday" type="checkbox" onChange={props.handleChange} />
            <label>{translate("Saturday")} </label>
            <br />"
            <button className="btn btn-success btn-block">{translate("Submit")}</button>
        </React.Fragment>
    );
}

export default Survey;