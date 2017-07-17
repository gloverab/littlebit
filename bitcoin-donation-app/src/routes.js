import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import Home from './components/common/HomePage'
import About from './components/common/About'
import Register from './components/auth/Register'
import LogInPage from './components/auth/LogInPage'
import OrganizationsPage from './components/organization/OrganizationsPage'
import OrganizationNew from './components/organization/OrganizationNew'
import OrganizationDetailsPage from './components/organization/OrganizationDetailsPage'
import NotFoundPage from './components/common/NotFoundPage'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/login" component={LogInPage}></Route>
    <Route path="/organizations" component={OrganizationsPage} onEnter={requireAuth}></Route>
      <Route path="/organizations/new" component={OrganizationNew}></Route>
    <Route path="/organizations/:id" component={OrganizationDetailsPage}></Route>

    <Route path="*" component={NotFoundPage}></Route>
  </Route>
)

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: {nextPathname: nextState.location.pathname}
    })
  }
}
