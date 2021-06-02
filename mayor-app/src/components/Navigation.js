import React from 'react';
import '../Styling/NavBar.css';
import { Link } from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton'


const Navigation = (props) => {
    const windowWidth = props.windowWidth;

    return (
        <div>
            <nav className="NavBar">
                {/*Links to homepage when on another page - can play around with styling*/}
                {/*<Link to="/" className = "NavBarLink">Nashville Food</Link>*/}
                <a className="NavBarLink" href={"/"}>Nashville Food</a>
                <NavBarType width = {windowWidth} />
            </nav>
        </div>
    );
}

function NavBarExpanded(){
    return (
        <div className="NavBar-Expanded">
            <ul className="NavBar-Nav mr-auto" >
                <a className="NavBarItem" href={"INSERT LINK LATER"}>About</a>
                <DropdownButton
                    key={"down"}
                    variant="NavBarItem-Dropdown" 
                    drop={"down"}
                    title={"Get Help ▼"}
                    
                    >
                    <Dropdown.Item className="Dropdown-Item" eventKey="1">Food Finder Survey</Dropdown.Item>
                    <Dropdown.Item className="Dropdown-Item" eventKey="2">Resource Map</Dropdown.Item>
                    <Dropdown.Item className="Dropdown-Item" eventKey="3">Assistance Programs</Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    key={"down"}
                    variant="NavBarItem-Dropdown" 
                    drop={"down"}
                    title={"Get Involved ▼"}
                    >
                    <Dropdown.Item className="Dropdown-Item" eventKey="1" href={"/Form"}>Submit A Resource</Dropdown.Item>
                    <Dropdown.Item className="Dropdown-Item" eventKey="2">Donate Space</Dropdown.Item>
                    <Dropdown.Item className="Dropdown-Item" eventKey="3">Volunteer</Dropdown.Item>
                </DropdownButton>


                
            </ul>
        </div>
    );
}

function NavBarCondensed(){
    return (
        <div className="NavBar-Condensed">
            <ul className="NavBar-Nav mr-auto" >
                <a className="NavBarItem" href={"INSERT LINK LATER"}>About</a>
                <DropdownButton
                    key={"down"}
                    variant="NavBarItem-Dropdown" 
                    drop={"down"}
                    title={"Get Help ▼"}
                    
                    >
                    <Dropdown.Item className="Dropdown-Item" eventKey="1">Food Finder Survey</Dropdown.Item>
                    <Dropdown.Item className="Dropdown-Item" eventKey="2">Resource Map</Dropdown.Item>
                    <Dropdown.Item className="Dropdown-Item" eventKey="3">Assistance Programs</Dropdown.Item>
                </DropdownButton>
                <br />
                <DropdownButton
                    key={"down"}
                    variant="NavBarItem-Dropdown" 
                    drop={"down"}
                    title={"Get Involved ▼"}
                    >
                    <Dropdown.Item className="Dropdown-Item" eventKey="1">Submit A Resource</Dropdown.Item>
                    <Dropdown.Item className="Dropdown-Item" eventKey="2">Donate Space</Dropdown.Item>
                    <Dropdown.Item className="Dropdown-Item" eventKey="3">Volunteer</Dropdown.Item>
                </DropdownButton>
                
            </ul>                   
        </div>
    );
}

function NavBarType(props){
    const width = props.width
    if (width < 768){
        console.log(width);
        return <NavBarCondensed />
    }
    else{
        return <NavBarExpanded />
    }
}

export default Navigation;