// Set up your application entry point here...
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import * as organizationActions from './actions/organizationActions'
import routes from './routes';
import devToolsEnhancer from 'remote-redux-devtools'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import configureStore from './store/configureStore'

export const store = configureStore()
store.dispatch(organizationActions.fetchOrganizations())

render (
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
)
