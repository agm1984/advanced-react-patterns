import React, { Component } from 'react'
import './App.css'
import Compound from './compound/Compound'

const Header = ({ color, onLastClicked }) => {
  return (
    <div
      style={{ color }}
      onClick={() => onLastClicked('blue')}
    >
      HEADER
    </div>
  )
}

const Middle = ({ onLastClicked }) => {
  return (
    <div
      onClick={() => onLastClicked('orange')}
    >
      MIDDLE
    </div>
  )
}

const Footer = ({ onLastClicked }) => {
  return (
    <div
      onClick={() => onLastClicked('green')}
    >
      FOOTER
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Compound>
          <Header />
          <Middle />
          <Footer />
        </Compound>
      </div>
    )
  }
}

export default App
