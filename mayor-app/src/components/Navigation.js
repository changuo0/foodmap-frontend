import React from 'react';

import { Link } from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";

const Navigation = () => {
    return (
        <div>
            <nav className="NavBar">
                <Link to="/">Nashville Food</Link>
                <div className="NavBar-Expanded">
                    <a className="NavBarItem" href={"INSERT LINK LATER"}>About</a>
                    <Dropdown >
                        <Dropdown.Toggle variant="NavBarItem-Dropdown">
                            Get Help
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <a className="NavBarItem-Dropdown" href={"INSERT LINK LATER"}>Get Involved</a>
                    <button className="SearchBarButton">Search</button>
                    <input className="SearchBar" type="text" placeholder="Search"/>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;