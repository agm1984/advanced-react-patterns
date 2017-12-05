import React, { Component } from 'react'

class Compound extends Component {
  state = {
    lastClicked: null,
    color: 'red',
  }
  render() {
    const children = React.Children.map(
      this.props.children,
      child => React.cloneElement(child, {
        color: this.state.color,
        onLastClicked: color => this.setState({ color }),
      })
    )
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Compound
