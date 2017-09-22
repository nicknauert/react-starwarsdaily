import React, { Component } from 'react'

export default class VehicleCard extends Component {
  constructor(){
    super()
  }

  render(){
    return(
        <div className="card col-sm-3 p-0 m-4">
          <div className="card-block p-3 m-0">
            <h4>Vehicle: {this.props.vics.name}</h4>
            <small className="text-muted">Model: {this.props.vics.model}</small>
          </div>
          <div className="card-block p-3">
            <ul className="list-group">
              <li className="list-group-item">Specs</li>
              <li className="list-group-item">Manufacturer: {this.props.vics.manufacturer}</li>
              <li className="list-group-item">Class: {this.props.vics.vehicle_class}</li>
              <li className="list-group-item">Passengers: {this.props.vics.passengers}</li>
              <li className="list-group-item">Crew: {this.props.vics.crew}</li>
              <li className="list-group-item">Length: {this.props.vics.length}</li>
              <li className="list-group-item">Max Speed: {this.props.vics.max_atmosphering_speed}</li>
              <li className="list-group-item">Cargo Capacity: {this.props.vics.cargo_capacity}</li>
            </ul>
          </div>
        </div>

    )
  }

}
