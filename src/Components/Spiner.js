import React, { Component } from 'react'
import News from './News.gif'
export class Spiner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={News} alt="loading"/>
      </div>
    )
  }
}

export default Spiner
