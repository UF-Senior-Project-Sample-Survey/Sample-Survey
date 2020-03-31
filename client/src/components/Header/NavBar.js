import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

//https://www.w3schools.com/css/css_navbar.asp
class NavBar extends React.Component {
    render(){

        return (
        <nav className="z-depth-0">
            <div className="nav-wrapper white">
                <a href="#" class="logo"> <Link
                        to="/"
                        style={{
                            //fontFamily: "Robato",
                        }}
                        className="col s5 brand-logo left black-text"
                    >
                            Sample Survey
                        </Link>
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                </ul>
            </div>
      </nav>
        )
    }
}

export default NavBar;
