import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {bindActionCreators} from 'redux'
import * as organizationActions from '../../actions/organizationActions'

class OrganizationTd extends React.Component {
  constructor(props) {
    super(props)

    this.handleUpvote = this.handleUpvote.bind(this)
  }


  handleUpvote() {
    this.props.organization.upvotes += 1
    this.setState((prevState, props) => {
      upvotes: props.organization.upvotes
    })
    organizationActions.updateOrganization(this.props.organization)
  }

  render() {
    return (
      <tr key={this.props.organization.id}>
        <td>{this.props.organization.name}</td>
        <td>{this.props.organization.city}</td>
        <td>{this.props.organization.props}</td>
        <td><Link to={`/organizations/${this.props.organization.id}`}>View Organization</Link></td>
        <td><button onClick={this.handleUpvote}>upvote</button></td>
        <td>{this.props.organization.upvotes}</td>
      </tr>
    )
  }
}


export default OrganizationTd
