import Axios from 'axios'
import thunk from 'redux-thunk'
import * as actionTypes from './actionTypes'
import sessionApi from '../api/sessionApi'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, PROTECTED_TEST, LOG_IN_SUCCESS } from './actionTypes';

const CLIENT_ROOT_URL = 'http://localhost:3000'
const API_URL = 'http://localhost:3001/api'

export function loginSuccess() {
  return {type: actionTypes.LOG_IN_SUCCESS}
}

export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt)
      dispatch(loginSuccess())
    }).catch(error => {
      throw(error)
    })
  }
}



// THE BEFORE TIMES

export function registerUser({ email, firstName, lastName, password, password_confirmation}) {
  return function(dispatch) {
    Axios.post(`${API_URL}/register`, { email, firstName, lastName, password})
    .then(response => {
      window.sessionStorage.setItem("token", response.data.auth_token)
      dispatch({ type: AUTH_USER })
      window.location.href = CLIENT_ROOT_URL + '/organizations'
    })
    .catch((error) => {
      throw(error)
    })
  }
}

export function logoutUser() {
  return function (dispatch) {
    dispatch({ type: UNAUTH_USER} )
    cookie.remove('token', { path: '/' })

    window.location.href = CLIENT_ROOT_URL + '/login'
  }
}
