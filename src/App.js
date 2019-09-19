import React, { Component } from 'react';

import Sidebar from './components/Sidebar/index';
import Video from './components/Video';

import { Provider } from 'react-redux';


import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>      
        <div className="App">
          <Video></Video>
          <Sidebar></Sidebar>
        </div>
      </Provider>
    );
  }
}

export default App;
