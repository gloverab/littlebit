import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'
import { browserHistory } from 'react-router'

export default function userReducer(state = initialState.currentUser, action) {
  switch(action.type) {

    case actionTypes.CAPTURE_EMAIL_SUCCESS:
      return action.input

    default:
      return state
  }
}
