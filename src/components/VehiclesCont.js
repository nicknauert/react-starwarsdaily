import React, { Component } from 'react'
import VehicleCard from './VehicleCard'

export default class VehiclesCont extends Component {
  constructor(){
    super()
  }

  render(){
    console.log(this.props);
    return(
      <div className="container">
        <div className="row justify-content-center">
          {this.props.vics.map((vic)=>{
            return (
              <VehicleCard key={vic.name} vics={vic}/>
            )

          })}
        </div>
      </div>
    )
  }

}
