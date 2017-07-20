import React from 'react'

const EmailSignupForm = (props) => {
  let emailInput = null

  return (
    <form onSubmit={e => {

        e.preventDefault()
        var input = {
          email: emailInput.value
        }

        props.handleSubmit(input)
        e.target.reset()
      }}
      className="form-inline"
      >

      <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            ref={node => emailInput = node}
            className="form-control mr-10" />
          <input type="submit" value="Get Started" className="btn btn-default" />
      </div>

    </form>
  )
}

export default EmailSignupForm
