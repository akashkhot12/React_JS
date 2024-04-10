import React, { Component } from 'react'

export default class ClassComponet extends Component {
    constructor(){
        super();
        this.state = {
            data:0
        }
    }

    updateValue(){
        this.setState({
            data:this.state.data + 1
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.updateValue()}>Adding </button>
      </div>
    )
  }
}
