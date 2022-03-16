import React, { Component } from 'react'
import Loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
        <div className="d-flex align-items-center justify-content-center"  style={{minHeight: '100vh' }}>
            <img src={Loading} alt="Loading" />
      </div>
    )
  }
}
 