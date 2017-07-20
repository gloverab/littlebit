import React from 'react'
import PropTypes from 'prop-types'
import { Link, IndexLink } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import littleBitLogo from '../../images/little-bit-logo-2-small.png'
import * as sessionActions from '../actions/authActions'

class Header extends React.Component {
  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    if (this.props.logged_in) {
      return (
        <div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">

              <div className="navbar-header">
                <Link to="/" className="navbar-brand"><img src={littleBitLogo} alt="Bitcoin Logo" /></Link>
              </div>

              <div className="collapse navbar-collapse" id="bitcoin-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="/about">ABOUT</Link></li>
                  <li><Link to="/organizations">ORGANIZATIONS</Link></li>
                  <li><Link to="/organizations/new">REGISTER AN ORGANIZATION</Link></li>
                  <li><a href="/logout" onClick={this.logOut}>LOG OUT</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )
    } else {
      return (
        <div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">

              <div className="navbar-header">
                <Link to="/" className="navbar-brand"><img src={littleBitLogo} alt="Bitcoin Logo" /></Link>
              </div>

              <div className="collapse navbar-collapse" id="bitcoin-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="/about">ABOUT</Link></li>
                  <li><Link to="/login">LOG IN</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )
    }
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {logged_in: state.session}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
