import React, { useState } from 'react';
import {Link} from "react-router-dom";
import snap from "../images/snap.jpg";
import wic from "../images/wic.png";
import nutrition from "../images/nutrition.png";
import skyline from "../images/skyline.jpg";
import community from "../images/community.jpg";
import '../Styling/App.css';
import { I18nProvider, LOCALES } from '../i18n';
import translate from "../i18n/translate";

const Home = () => {
    function openUrl(url){
        window.open(url);
    }
    
    return (
        <I18nProvider locale={LOCALES.ENGLISH}>
            <div>
           
                {/*First Main Section  */}
                <div className="Container">
                    <img className="Communityimg" src={community} />
                    <div className="TextBox">
                        <h1 className="display-3">
                            {translate('Find Food')}
                        </h1>
                        <p className="Title-P">Take this survey to find food near you</p>
                        <button className="ButtonPrimary" On onClick={() => openUrl("/Survey")}>Take Survey »</button>
                    </div>
                    
                </div>
                
                {/*Second Main Section */}
                <div className = "col-container-2">
                    <div className="row">
                        <div className = "col-2">
                            <img className="Skylineimg" src={skyline} />
                        </div>
                        <div className = "col-2">
                            <h2 className="FindFood">Find Food</h2>
                            <p className="FindFood">Take this survey to find food near you.</p>
                            <p className="FindFood">Please select your lnguage below</p>
                            <div className="row">
                                <div className = "col-2">
                                    <button className="ButtonSecondary" On onClick={() => openUrl("/Survey/:en")}>English</button>
                                </div>
                                <div className = "col-2">
                                <button className="ButtonSecondary" On onClick={() => openUrl("/Survey/:fr")}>French</button>
                                </div>
                            </div>    
                            <div className="row">
                                <div className = "col-2">
                                    <button className="ButtonSecondary" On onClick={() => openUrl("/Survey:es")}>Spanish</button>
                                </div>
                                <div className = "col-2">
                                <button className="ButtonSecondary" On onClick={() => openUrl("/Survey:vi")}>Vietnamese</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className = "col-2">
                                    <button className="ButtonSecondary" On onClick={() => openUrl("/Survey:zh")}>Mandarin</button>
                                </div>
                                <div className = "col-2">
                                <button className="ButtonSecondary" On onClick={() => openUrl("/Survey:de")}>German</button>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                
                {/*Third Main section*/}
                {/*
                <div className = "subDisplay">
                    Nashville Food Pantry Calendar
                    <div className = "row">
                        <h4>Monday</h4>
                        <h4>Tuesday</h4>
                        <h4>Wednesday</h4>
                        <h4>Thursday</h4>
                        <h4>Friday</h4>
                        <h4>Saturday</h4>
                        <h4>Sunday</h4>
                    </div>
                    <h2>IMPORT CALENDAR</h2>
                    <button className="ButtonPrimary" On onClick={() => openUrl("INSERT LINK")}>Get Calendar »</button>
                </div>
                */}

                {/* Assistance Programs section */}
                <div className = "subDisplay">
                    Assistance Programs
                    <div className="row">
                        <div className = "col-2">
                            <h2>SNAP</h2>
                            <img classname="assistanceimg" src={snap} />
                            <button className="ButtonPrimary" On onClick={() => openUrl("https://faonlineapp.dhs.tn.gov/")}>Apply Here »</button>
                        </div>
                        <div className = "col-2">
                            <h2>WIC</h2>
                            <img classname="assistanceimg" src={wic}/>
                            <button className="ButtonPrimary" On onClick={() => openUrl("https://www.tn.gov/health/health-program-areas/fhw/wic.html")}>Learn How to Apply »</button>
                        </div>
                        <div className = "col-2">
                            <h2>Nutrition Info</h2>
                            <img classname="assistanceimg" src={nutrition}/>
                            <button className="ButtonPrimary" On onClick={() => openUrl("/")}>Learn More »</button>
                        </div>
                    </div>
                </div>

                    {/* Bottom Display */}
                <div className = "bottomDisplay">
                    <h2 style={{color: "white"}}> Donator? Sign in Below </h2>
                    <button className="ButtonSecondary" On onClick={() => openUrl("/Login")}>Sign In</button>
                    
                </div>

                
            </div>
        </I18nProvider>
    );
}

export default Home;