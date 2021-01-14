import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton'

const Navigation = () => {
    return (
        <div>
            <nav className="NavBar">
                {/*Links to homepage when on another page - can play around with styling*/}
                {/*<Link to="/" className = "NavBarLink">Nashville Food</Link>*/}
                <a className="NavBarLink" href={"/"}>Nashville Food</a>
                <div className="NavBar-Expanded">
                    <ul className="NavBar-Nav mr-auto" >
                        <a className="NavBarItem" href={"INSERT LINK LATER"}>About</a>
                        <DropdownButton
                            key={"down"}
                            variant="NavBarItem-Dropdown" 
                            drop={"down"}
                            title={"Get Help"}
                            >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        </DropdownButton>
                        
                        <Dropdown >
                            <Dropdown.Toggle variant="NavBarItem-Dropdown">
                                Get Involved
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ul>
                    <input className="SearchBar" type="text" placeholder="Search"/>
                    <button className="SearchBarButton">Search</button>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;