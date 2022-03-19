import React, { Component } from 'react'
import Loading from './loading.svg'

export default class Spinner extends Component {
  render() {
    return (
        <div className="d-flex align-items-center justify-content-center"  style={{minHeight: '30vh' }}>
        <img src={Loading} alt="Loading" style={{width: '5em'}}/>
      </div>
    )
  }
}
 