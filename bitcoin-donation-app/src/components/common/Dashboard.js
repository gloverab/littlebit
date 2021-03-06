import React from 'react';
import { connect } from 'react-redux';
import * as organizationActions from '../../actions/organizationActions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.props.protectedTest()
  }

  renderContent() {
    if (this.props.content) {
      return(
        <p>{this.props.content}</p>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { content: state.auth.content }
}

export default connect(mapStateToProps, organizationActions)(Dashboard)
