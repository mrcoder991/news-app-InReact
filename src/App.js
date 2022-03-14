// API KEY = 947cc1e70d864f97b3ae51200b8d9658

import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar'


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News />
      </div>
    )
  }
}

