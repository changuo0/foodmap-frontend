import React from 'react';
import '../App.css';

class Survey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            streetAddress: "",
            streetAddress2: "",
            city: "",
            state:"",
            zip:"",
            nonperishables: false,
            freshfood: false,
            boxedmeals: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        //not sure about this part atm
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting");
    }

    render() {
        return (
            <div className="survey-form">
            <form onSubmit={this.mySubmitHandler}>
                <h5>Address:</h5>
                <input className="long-text-input"
                    name="streetAddress"
                    placeholder="1234 Main St"
                    checked={this.state.streetAddress}
                    onChange={this.handleInputChange} />

                <h5>Address Line 2:</h5>
                <input className="long-text-input"
                    name="streetAddress2"
                    placeholder="Apartment, Studio, or Floor"
                    value={this.state.streetAddress2}
                    onChange={this.handleInputChange} />

                <h5>City:</h5>
                <input
                    name="city"
                    value={this.state.city}
                    onChange={this.handleInputChange} />

                <h5>State:</h5>
                <select value={this.state.value} onChange={this.handleInputChange}>
                    <option value="" selected="selected">Select a State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>

                <h5>Zip:</h5>
                <input
                    name="zip"
                    type="text"
                    value={this.state.zip}
                    onChange={this.handleInputChange} />

                <h5>I am looking for...</h5>
                <input
                    name="nonperishables"
                    type="checkbox"
                    value={this.state.nonperishables}
                    onChange={this.handleInputChange} />
                <label>Non-Perishables</label>
                <br />
                <input
                    name="freshfood"
                    type="checkbox"
                    value={this.state.freshfood}
                    onChange={this.handleInputChange} />
                <label> Fresh Food </label>
                <br />
                <input
                    name="boxedmeals"
                    type="checkbox"
                    value={this.state.boxedmeals}
                    onChange={this.handleInputChange} />
                <label> Boxed Meals </label>
                <br />

                <input className="ButtonSecondary" type="submit"/>

            </form>
        </div>
        );
    }
}

export default Survey;