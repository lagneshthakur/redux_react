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
