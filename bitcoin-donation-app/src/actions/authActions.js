import Axios from 'axios'
import thunk from 'redux-thunk'
import * as actionTypes from './actionTypes'
import sessionApi from '../api/sessionApi'
import * as organizationActions from './organizationActions'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, PROTECTED_TEST, LOG_IN_SUCCESS } from './actionTypes';

const CLIENT_ROOT_URL = 'http://localhost:3000'
const API_URL = 'http://localhost:3001/api'

export function loginSuccess() {
  return {type: actionTypes.LOG_IN_SUCCESS}
}

export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials)
      .then(response => {
      sessionStorage.setItem('jwt', response.jwt)
      dispatch(organizationActions.fetchOrganizations())
    }).then(response => {
      if (sessionStorage.jwt != "undefined") {
        dispatch(loginSuccess())
      } else {
        logOutUser()
      }
    }).catch(error => {
      throw(error)
    })
  }
}

export function logOutUser() {
  sessionStorage.removeItem('jwt')
  return {type: actionTypes.LOG_OUT}
}

// THE BEFORE TIMES

export function registerUser({ email, firstName, lastName, password, password_confirmation}) {
  return function(dispatch) {
    Axios.post(`${API_URL}/register`, { email, firstName, lastName, password})
    .then(response => {
      sessionStorage.setItem("jwt", response.data.auth_token)
      dispatch(loginSuccess())
    }).then(response => {
      dispatch(organizationActions.fetchOrganizations())
    })
    .catch((error) => {
      throw(error)
    })
  }
}

export function captureEmailSuccess(input) {
  return {
    type: actionTypes.CAPTURE_EMAIL_SUCCESS,
    input
  }
}

export function captureEmail(input) {
  return function(dispatch) {
    dispatch(captureEmailSuccess(input))
  }
}
