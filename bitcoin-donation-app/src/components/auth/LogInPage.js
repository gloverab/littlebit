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
    e.preventDefault()
    this.props.actions.logInUser(this.state.credentials)
  }

  render() {
    return (
      <div>
        <div className="container">

          <div className="form-wrapper col-centered text-center rounded light-blue-background">

            <form>
              <TextInput
                name="email"
                placeholder="Email"
                value={this.state.credentials.email}
                onChange={this.onChange}/>

              <TextInput
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.credentials.password}
                onChange={this.onChange}/>

              <input
                type="submit"
                className="btn btn-primary"
                onClick={this.onSave}/>
                {" "}
            </form>
          </div>
        </div>
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
