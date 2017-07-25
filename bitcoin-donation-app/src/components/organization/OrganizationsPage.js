import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Link } from 'react-router'
import OrganizationTd from './OrganizationTd'
import * as organizationActions from '../../actions/organizationActions'
import * as sessionActions from '../../actions/authActions'

class OrganizationsPage extends React.Component{
  constructor(props) {
    super(props)
  }

  upvoteOrg(organization) {
    debugger
    if (!organization.upvotes) {
      organization.upvotes = 0
    } else {
      organization.upvotes =+ 1
    }
  }

  render() {
    return(

      <div className="container">
        {this.props.isFetching ? <h2>Loading...</h2> : <h2></h2>}
        <h1>Organizations</h1>
        <div className="row">

          <div className="col-sm-12">
            <table className="table table-hover">
              <thead>
                <th>Organization Names</th>
                <th>City</th>
                <th>State</th>
              </thead>

              <tbody>
                {
                  this.props.organizations ? this.props.organizations.items.map((organization) =>
                  <OrganizationTd organization={organization} handleUpvote={this.upvoteOrg.bind(this)} /> ) :
                    <div className="loading"><div className="loader">Creating your wallet...</div></div>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.organizations.items.length > 0) {
    return {
      organizations: state.organizations
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(Object.assign({}, organizationActions, sessionActions), dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationsPage)
