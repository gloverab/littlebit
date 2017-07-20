import React from 'react'
import { connect } from 'react-redux'
import * as authActions from '../../actions/authActions'
import EmailSignupForm from './EmailSignupForm'
import homeBackground from '../../../images/device-slider-background.jpg'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(input) {
    this.props.registerUser(input)
    this.props.router.push('/register')
  }

  render() {
    return(
      <div className="home">
        <div className="container bottom-60">
          <h1 className="text-center top-90 bottom-30 letter-space-2 hero-text">START ACCEPTING BITCOIN AT YOUR ORGANIZATION</h1>
          <div className="row">
            <div className="col-sm-8 col-centered text-center">
              <p className="bottom-60">LittleBit is a project aimed toward helping nonprofits like yours accept and understand Bitcoin. Despite what you may have heard, Bitcoin doesn't need to be complicated! We'll help you set up a wallet and incorporate an easy way to accept donations from otherwise unlikely donors.</p>

              <EmailSignupForm handleSubmit={this.handleSubmit.bind(this)} />

            </div>
          </div>
        </div>

        <div className="hero-image container-fluid pad-0">
        </div>

        <div className="dark-blue-background">
          <div className="container">
            <h1>HELLO WORLD</h1>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: input =>
    dispatch(authActions.captureEmail(input))
  }
}

export default connect(null, mapDispatchToProps)(Home)
