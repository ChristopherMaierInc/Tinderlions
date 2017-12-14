import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'
import bulma from 'reactbulma'

class App extends Component {

  state = {
    viewed: 0,
    maxViews: 10
  }

  render() {
    const { viewed, maxViews } = this.state
    return (
      <div className="App">
        <p>You have viewed { viewed }/{ maxViews } profiles</p><br />

        <Profile />

      </div>
    );
  }
}

export default App;
