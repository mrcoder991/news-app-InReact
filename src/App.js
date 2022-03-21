// API KEY = 947cc1e70d864f97b3ae51200b8d9658

import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;
  pageSize = 6;
  country = 'in';

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress : progress})
  }
  render() {
    return (
      <div> 
        <LoadingBar
        color='#f11946'
          progress={this.state.progress}
          height={3}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <News setProgress={this.setProgress} key={1} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='general'/> } />
          <Route exact path="/business" element={ <News setProgress={this.setProgress} key={2} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='business'/> } />
          <Route exact path="/entertainment" element={ <News setProgress={this.setProgress} key={3} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='entertainment'/> } />
          <Route exact path="/general" element={ <News setProgress={this.setProgress} key={4} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='general'/> } />
          <Route exact path="/health" element={ <News setProgress={this.setProgress} key={5} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='health'/> } />
          <Route exact path="/science" element={ <News setProgress={this.setProgress} key={6} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='science'/> } />
          <Route exact path="/sports" element={ <News setProgress={this.setProgress} key={7} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='sports'/> } />
          <Route exact path="/technology" element={ <News setProgress={this.setProgress} key={8} pageSize={this.pageSize} apiKey={this.apiKey} country={this.country} category='technology'/> } />
        </Routes>
      </div>
    )
  }
}

