// API KEY = 947cc1e70d864f97b3ae51200b8d9658

import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"

export default class App extends Component {
  apiKey = "947cc1e70d864f97b3ae51200b8d9658"
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <News key={1} pageSize={6} apiKey={this.apiKey} country='in' category='general'/> } />
          <Route exact path="/business" element={ <News key={2} pageSize={6} apiKey={this.apiKey} country='in' category='business'/> } />
          <Route exact path="/entertainment" element={ <News key={3} pageSize={6} apiKey={this.apiKey} country='in' category='entertainment'/> } />
          <Route exact path="/general" element={ <News key={4} pageSize={6} apiKey={this.apiKey} country='in' category='general'/> } />
          <Route exact path="/health" element={ <News key={5} pageSize={6} apiKey={this.apiKey} country='in' category='health'/> } />
          <Route exact path="/science" element={ <News key={6} pageSize={6} apiKey={this.apiKey} country='in' category='science'/> } />
          <Route exact path="/sports" element={ <News key={7} pageSize={6} apiKey={this.apiKey} country='in' category='sports'/> } />
          <Route exact path="/technology" element={ <News key={8} pageSize={6} apiKey={this.apiKey} country='in' category='technology'/> } />
        </Routes>
      </div>
    )
  }
}

