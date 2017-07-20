// Set up your root reducer here...
import { combineReducers } from 'redux';
import {organizationsReducer, organizationReducer} from './organizationReducers'
import sessionReducer from './sessionReducers'
import userReducer from './userReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  form: formReducer,
  organizations: organizationsReducer,
  organization: organizationReducer,
  session: sessionReducer,
  currentUser: userReducer
})
