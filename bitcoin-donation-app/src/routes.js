import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Home from './components/common/HomePage'
import About from './components/common/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import RequireAuth from './components/auth/RequireAuth'
import Dashboard from './components/common/Dashboard'
import OrganizationsPage from './components/organization/OrganizationsPage'
import OrganizationNew from './components/organization/OrganizationNew'
import OrganizationDetailsPage from './components/organization/OrganizationDetailsPage'
import NotFoundPage from './components/common/NotFoundPage'
import App from './components/App'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/dashboard" component={RequireAuth(Dashboard)}></Route>
    <Route path="/organizations" component={OrganizationsPage}></Route>
    <Route path="/organizations/new" component={OrganizationNew}></Route>
    <Route path="/organizations/:id" component={OrganizationDetailsPage}></Route>

    <Route path="*" component={NotFoundPage}></Route>
  </Route>
)
