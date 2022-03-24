import React, { Component } from 'react'

export default class Test extends Component {
  constructor(props){
    super(props);
    this.state = {user:'Thai'}
  }
  render() {
    return (
      <h1>
        Test
        {this.props.test}
        {this.state.user}
      </h1>
    )
  }
}

