import React, { Component } from 'react'

export default class Form extends Component {
  constructor(){
    super()
    this.state = {
      pilot: "",
      pilotName: ""
    }
  }

    _handleNameChange = (event)=>{
      let inputName = event.target.name
      this.setState({
        [inputName]: event.target.value
      })
      console.log(event.target.value);
    }

    _handleSubmit = (event)=> {
      event.preventDefault();
      this.setState({
        pilotName: this.state.pilot
      })
    }

    render(){
      return (
          <div className="container col-sm-4">
            <form className="card" onSubmit={this._handleSubmit}>
              <div className="card-block">
                <label  htmlFor="pilot">What Is Your Name Pilot?</label>
                <input className="form-control" type="text" name="pilot" onChange={this._handleNameChange}/>
              </div>
              <div className="pilotName h3">{this.state.pilotName}</div>
              <button type="submit" className="btn btn-primary width-25%">Submit</button>
            </form>
          </div>
      )
    }
}
