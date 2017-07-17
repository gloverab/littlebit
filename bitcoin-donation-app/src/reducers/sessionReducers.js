import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'
import { browserHistory } from 'react-router'

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type) {
    case actionTypes.LOG_IN_SUCCESS:
      browserHistory.push('/')
      return !!sessionStorage.jwt
    case actionTypes.LOG_OUT:
      browserHistory.push('/login')
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
