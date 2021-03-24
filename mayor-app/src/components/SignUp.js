import React from 'react';
//import '../Styling/App.css';
import '../Styling/SignUp.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            EIN: "",
            t501c3: "",
            ContactName: "",
            email:"",
            phone:"",
            registered: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

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
                <h5 className="SignUpInput">EIN:</h5>
                <input className="long-text-input"
                    name="EIN"
                    placeholder="EIN"
                    value={this.state.EIN}
                    onChange={this.handleInputChange} />

                <h5 className="SignUpInput">501C3:</h5>
                <input className="long-text-input"
                    name="501C3"
                    placeholder="IDEK what a 501C3 is"
                    value={this.state.t501c3}
                    onChange={this.handleInputChange} />

                <h5 className="SignUpInput">Primary Contact</h5>
                <input
                    name="Full Name"
                    size="100"
                    value={this.state.ContactName}
                    onChange={this.handleInputChange} />

                

                <h5 className="SignUpInput">Email:</h5>
                <input
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleInputChange} />

                <h5 className="SignUpInput">Phone Number:</h5>
                <input
                    name="phone number"
                    type="text"
                    placeholder="XXX-XXX-XXXX"
                    value={this.state.phone}
                    onChange={this.handleInputChange} />

                <div/>
                <input className="SignUpButton" type="submit"/>

            </form>
        </div>
        );
    }
}

export default SignUp;