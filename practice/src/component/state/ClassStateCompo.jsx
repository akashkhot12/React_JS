import React, { Component } from 'react'

export default class ClassStateCompo extends Component {
    constructor(){
        super();
        this.state={
            data:0
        }
    }
    nameChange(){
        this.setState({data:this.state.data+1})
    }
    render() {
    
    return (
      <div>
        <h1>class state component</h1>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.nameChange()}>click</button>
      </div>
    )
  }
}
