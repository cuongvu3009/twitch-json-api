import React, { Component } from 'react';
import StreamsIndex from './components/stream_index';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>React App Using Twitch API</h1>
        </header>
        <StreamsIndex />
      </div>
    );
  }
}

export default App;
