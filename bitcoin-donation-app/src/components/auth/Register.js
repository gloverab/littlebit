import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { registerUser } from '../../actions/authActions'
import defaultAvatar from '../../../images/765-default-avatar.png'

class Register extends Component {

  handleFormSubmit(formProps) {
    this.props.registerUser(formProps)
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      )
    }
  }

  render() {
    let emailInput, passwordInput, firstNameInput, lastNameInput = null

    return (
      <div className="container">
        <div className="form-wrapper col-centered text-center rounded light-blue-background">

          <img src={defaultAvatar} alt="New User Photo" className="new-user-photo" />

          <form onSubmit={e => {
              e.preventDefault()

              var input = {
                email: emailInput.value,
                password: passwordInput.value,
                firstName: firstNameInput.value,
                lastName: lastNameInput.value
              }

              this.handleFormSubmit(input)
              e.target.reset()
            }}
          >

            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder={this.props.currentUser.email || 'Email'}
                value = {this.props.currentUser.email}
                onChange={this}
                ref={node => emailInput = node}
                className="form-control" />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={node => passwordInput = node}
                className="form-control" />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                ref={node => firstNameInput = node}
                className="form-control" />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                ref={node => lastNameInput = node}
                className="form-control" />
            </div>

            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {registerUser})(Register)
