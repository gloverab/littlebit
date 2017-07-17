import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'
import {browserHistory} from 'react-router'

export const organizationsReducer = (state = initialState.organizations, action) => {
  switch (action.type) {

    case 'REQUEST_ORGANIZATIONS':
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }

    case actionTypes.FETCH_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.organizations
      }

    case actionTypes.CREATE_ORGANIZATION_SUCCESS:
      return {
      items: [
      ...state.items,
      Object.assign({}, action.organization)
      ],
      isFetching: false,
      didInvalidate: false
    }

    case "CREATING_WALLET":
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }

    default:
      return state
  }
}

export const organizationReducer = (state = initialState.organization, action) => {
  switch (action.type) {

    case actionTypes.FETCH_ORGANIZATION_BY_ID_SUCCESS:
      return action.organization

    default:
      return state
  }
}
