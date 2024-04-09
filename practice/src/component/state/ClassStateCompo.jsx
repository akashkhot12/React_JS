import React, { Component } from 'react'

export default class ClassStateCompo extends Component {
    constructor(){
        super();
        this.state={
            data:"akash"
        }
    }
  render() {
    return (
      <div><h1>{this.state.data}</h1></div>
    )
  }
}
