import React from 'react'
import { Link } from 'react-router'

class OrganizationTd extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      organization: this.props.organization,
      upvotes: 0
    }

    this.handleUpvote = this.handleUpvote.bind(this)
  }

  handleUpvote() {
    this.setState((prevState, props) => {
      return {
        upvotes: prevState.upvotes += 1
      }
    })
  }

  render() {
    return (
      <tr key={this.state.organization.id}>
        <td>{this.state.organization.name}</td>
        <td>{this.state.organization.city}</td>
        <td>{this.state.organization.state}</td>
        <td><Link to={`/organizations/${this.state.organization.id}`}>View Organization</Link></td>
        <td><button onClick={this.handleUpvote}>upvote</button>{this.state.upvotes}</td>
      </tr>
    )
  }
}

export default OrganizationTd
