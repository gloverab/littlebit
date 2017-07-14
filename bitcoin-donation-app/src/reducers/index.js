// Set up your root reducer here...
import { combineReducers } from 'redux';
import {organizationsReducer, organizationReducer} from './organizationReducers'
import { reducer as formReducer } from 'redux-form'
import authReducers from './authReducers'

export default combineReducers({
  auth: authReducers,
  form: formReducer,
  organizations: organizationsReducer,
  organization: organizationReducer
})
