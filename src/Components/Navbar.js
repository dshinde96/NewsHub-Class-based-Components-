
import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
// import func from "../App"
class Navbar extends Component {
    constructor(props){
        super();
        this.state={
            country:"india",
            cat:"genral"
        }
    }
    
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" to="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><NavLink className="nav-link" to="/">HOME</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/business">BUSINESS</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/entertainment">ENTERTAINMENT</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/health">HEALTH</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/science">SCIENCE</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/sports">SPORTS</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/technology">TECHNOLOGY</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;
