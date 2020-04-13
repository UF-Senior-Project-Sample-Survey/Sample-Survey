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

        var studentHeader, instructorHeader;

        studentHeader = <ul className="landing">
                            <Link to="/home">
                                <div className="headerText">
                                    Sample Survey
                                </div>
                            </Link>
                            <li><div className='log' onClick={() => this.props.logoutUser()}>Logout</div></li>
                            <li><Link to="/about" className="a">About</Link></li>
                            <li><Link to="/samplingmethods" className="a">Sampling Methods</Link></li>
                            <li><Link to="/createsurvey" className="a">Create a Survey</Link></li>
                        </ul>
        ;

        instructorHeader = <ul className="landing">
                            <Link to="/createsurvey">
                                <div className="headerText">
                                    Sample Survey
                                </div>
                            </Link>
                            <li><div className='log' onClick={() => this.props.logoutUser()}>Logout</div></li>
                            <li><Link to="/controlpanel" className="a">My Questions</Link></li>
                            <li><Link to="/about" className="a">About</Link></li>
                            <li><Link to="/samplingmethods" className="a">Sampling Methods</Link></li>
                            <li><Link to="/createsurvey" className="a">Create a Survey</Link></li>
                        </ul>
        ;

        return (
            instructorHeader
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

