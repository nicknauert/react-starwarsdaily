import React, { Component } from 'react'


export default class Jumbotron extends Component {
  constructor(){
    super();
  }

  render(){
    return (
        <div className="jumbotron container text-center">
            <h1 className="display-1">Star Wars</h1>
            <p>The Vehicles Of Star Wars</p>
        </div>
    )
  }
}
