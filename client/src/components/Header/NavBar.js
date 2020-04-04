import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

//https://www.w3schools.com/css/css_navbar.asp
class NavBar extends React.Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };

    render(){

        var studentHeader;

        studentHeader = <ul className="landing">
                            <Link to="/home">
                                <div className="headerText">
                                    Sample Survey
                                </div>
                            </Link>
                            <li><log onClick={() => this.props.logoutUser()}>Logout</log></li>
                            <li><Link to="/about" classname="a">About</Link></li>
                            <li><Link to="/samplingmethods" classname="a">Sampling Methods</Link></li>
                            <li><Link to="/createsurvey" classname="a">Create Sample</Link></li>
                        </ul>
        ;

        return (
            studentHeader
        )
    }
}

NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});
  
export default connect(
    mapStateToProps,
    { logoutUser }
    )(NavBar);

