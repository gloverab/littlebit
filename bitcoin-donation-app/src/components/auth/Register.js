import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { registerUser } from '../../actions/authActions'
import FaBeer from '../../../node_modules/react-icons/lib/fa/beer'

const form = reduxForm({
  form: 'register',
  validate
})

const renderField = field => (
  <div>
    <input className="form-control" {...field.input} value={field.thing} placeholder={field.placeholderText} />
    { field.touched && field.error && <div className="error">{field.error}</div> }
  </div>
)

function validate(formProps) {
  const errors = {}
  if (!formProps.firstName) {
    errors.firstName = "Please enter a first name"
  }
  if (!formProps.lastName) {
    errors.firstName = "Please enter a last name"
  }
  if (!formProps.email) {
    errors.email = "Please enter an email"
  }
  if (!formProps.password) {
    errors.password = "Please enter a password"
  }
  return errors
}

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
    const { handleSubmit } = this.props

    return (
      <div className="container">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            {this.renderAlert()}
            <div className="row text-center">
              <div className="col-sm-6 col-centered">

                <Field name="email" className="form-control" component={renderField} thing={this.props.currentUser.email} placeholderText="Email" type="text" />


                <Field name="password" className="form-control" component={renderField} placeholderText="Password" type="password" />


                <Field name="firstName" className="form-control" component={renderField} placeholderText="First Name" type="text" />


                <Field name="lastName" className="form-control" component={renderField} placeholderText="Last Name" type="text" />

                <br />
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
            </div>
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

export default connect(mapStateToProps, null)(form(Register))
