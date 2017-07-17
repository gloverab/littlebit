import React from 'react'
import TextInput from '../common/TextInput'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as authActions from '../../actions/authActions'


class LogInPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {credentials: {email: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(e) {
    const field = e.target.name
    const credentials = this.state.credentials
    credentials[field] = e.target.value
    return this.setState({ credentials: credentials })
  }

  onSave(e) {
    debugger
    e.preventDefault()
    this.props.actions.logInUser(this.state.credentials)
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <form>
          <TextInput
            name="email"
            label="email"
            value={this.state.credentials.email}
            onChange={this.onChange}/>

          <TextInput
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}/>

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onSave}/>
            {" "}
        </form>
      </div>
  );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LogInPage)