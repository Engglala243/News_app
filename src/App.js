import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="" pageSize={8} country="in" category="General" />} />
            <Route exact path="Business" element={<News key="Business" pageSize={8} country="in" category="Business" />} />
            <Route exact path="Entertainment" element={<News key="Entertainment" pageSize={8} country="in" category="Entertainment" />} />
            <Route exact path="General" element={<News key="General" pageSize={8} country="in" category="General" />} />
            <Route exact path="Health" element={<News key="Health" pageSize={8} country="in" category="Health" />} />
            <Route exact path="Science" element={<News key="Science" pageSize={8} country="in" category="Science" />} />
            <Route exact path="Sports" element={<News key="Sports" pageSize={8} country="in" category="Sports" />} />
            <Route exact path="Technology" element={<News key="Technology" pageSize={8} country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
