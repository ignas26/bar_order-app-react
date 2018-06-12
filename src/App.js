import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

class App extends Component {
  state={
    tabs:['Orders', 'Statistics', 'Settings'],
    activeTab:0
  };
  switchTab = (i)=>{
    this.setState({activeTab:i})
  };


  render() {
    return (
        <div>
          <Header
              active={this.state.activeTab}
              switchTab={this.switchTab}
              tabs={this.state.tabs}/>
          <Menu/>
        </div>
    );
  }
}

export default App;