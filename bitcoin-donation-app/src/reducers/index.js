// Set up your root reducer here...
import { combineReducers } from 'redux';
import {organizationsReducer, organizationReducer} from './organizationReducers'
import authReducers from './authReducers'
import sessionReducer from './sessionReducers'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  auth: authReducers,
  form: formReducer,
  organizations: organizationsReducer,
  organization: organizationReducer,
  session: sessionReducer
})
