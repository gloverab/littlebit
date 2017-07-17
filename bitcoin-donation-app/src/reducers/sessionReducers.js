import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'
import { browserHistory } from 'react-router'

export const sessionReducer = (state = initialState.session, action) => {

  switch(action.type) {
    case actionTypes.LOG_IN_SUCCESS:
      browserHistory.push('/')
      return !!sessionStorage.jwt

    default:
      return state
  }
}
