import React, { Component } from 'react'

export default class ClassComponet extends Component {
    constructor(){
        super();
         this.state = {
            data:"Akash khot"
        }
    }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
      </div>
    )
  }
}
