import React from 'react'
import { Link } from 'react-router'

class OrganizationTd extends React.Component {
  constructor(props) {
    super(props)
  }

  // ADDED UPTICKER TO SATISFY A PROJECT REQUIREMENT

  handleUpvote() {
    this.setState((prevState, props) => {
      return {
        upvotes: prevState.upvotes += 1
      }
    })
  }

  render() {
    return (
      <tr key={this.props.organization.id}>
        <td>{this.props.organization.name}</td>
        <td>{this.props.organization.city}</td>
        <td>{this.props.organization.state}</td>
        <td><Link to={`/organizations/${this.props.organization.id}`}>View Organization</Link></td>
      </tr>
    )
  }
}

export default OrganizationTd
