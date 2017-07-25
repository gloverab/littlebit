import Axios from 'axios'
import thunk from 'redux-thunk'
import organizationsApi from '../api/organizationsApi'
import * as actionTypes from './actionTypes'

const apiUrl = "http://localhost:3001/api/organizations"

// TODO: This is a test API address for quicker development. Real key will eventually be held by Figaro in Rails
const newWalletAddressUrl = "https://block.io/api/v2/get_new_address/?api_key=7fcc-6a0a-6ccd-5d15"

export const fetchOrganizationsSuccess = (organizations) => {
  return{
    type: actionTypes.FETCH_ORGANIZATIONS_SUCCESS,
    organizations
  }
}

export const fetchOrganizations = () => {
  return (dispatch) => {
    dispatch({type: "REQUEST_ORGANIZATIONS"})
    return organizationsApi.getAllOrganizations()
      .then(response => {
        dispatch(fetchOrganizationsSuccess(response))
      })
      .catch(error =>{
        throw(error)
      })
  }
}

export const fetchOrganizationByIdSuccess = (organization) => {
  return{
    type: actionTypes.FETCH_ORGANIZATION_BY_ID_SUCCESS,
    organization
  }
}

export const fetchOrganizationById = (organizationId) => {
  return (dispatch) => {
    return organizationsApi.showOrganization(organizationId)
    .then(response => {
        dispatch(fetchOrganizationByIdSuccess(response))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const createOrganizationSuccess = (organization) => {
  return {
    type: actionTypes.CREATE_ORGANIZATION_SUCCESS,
    organization
  }
}

export const createOrganization = (organization) => {
  return (dispatch) => {
    dispatch({ type: "CREATING_WALLET" })
    return Axios.get(newWalletAddressUrl)
      .then(response => {
        organization.walletAddress = response.data.data.address
        return organizationsApi.createOrganization(organization)
      })
      .then(reply => {
        return dispatch(createOrganizationSuccess(reply))
      })
      .catch(error => {
        throw(error)
      })
  }
}
