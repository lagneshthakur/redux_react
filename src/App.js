import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';
import Calendar from './components/calendar/index.js'

class App extends Component {
  render() {
    const {calendarData} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1>Hello world, this is a Redux tutorial!</h1>
            <p>Here is our property: {this.props.examplePropOne}</p>
          </div>
        </header>
        <Calendar calendarData={calendarData} />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    calendarData: state.reducedState
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({Actions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
