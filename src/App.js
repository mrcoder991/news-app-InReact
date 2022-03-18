// API KEY = 947cc1e70d864f97b3ae51200b8d9658

import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"

export default class App extends Component {
  apiKey = "947cc1e70d864f97b3ae51200b8d9658"
  pageSize = 6;
  country = 'in';
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <News key={1} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='general'/> } />
          <Route exact path="/business" element={ <News key={2} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='business'/> } />
          <Route exact path="/entertainment" element={ <News key={3} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='entertainment'/> } />
          <Route exact path="/general" element={ <News key={4} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='general'/> } />
          <Route exact path="/health" element={ <News key={5} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='health'/> } />
          <Route exact path="/science" element={ <News key={6} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='science'/> } />
          <Route exact path="/sports" element={ <News key={7} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='sports'/> } />
          <Route exact path="/technology" element={ <News key={8} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='technology'/> } />
        </Routes>
      </div>
    )
  }
}

