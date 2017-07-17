import React, { Component } from 'react'
import {Link} from 'react-router'
import Header from './Header'


const App = (props) => {

  return (
    <div>
      <Header />
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default App
