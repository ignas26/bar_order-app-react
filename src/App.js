import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Settings from './components/Settings';
import Statistics from './components/Statistics';
import Orders from './components/Orders';

class App extends Component {
  state={
    tabs:['Orders', 'Statistics', 'Settings'],
    activeTab:0
  };
  switchTab = (i)=>{
    this.setState({activeTab:i})
  };

  renderContent = ()=>{
    switch (this.state.activeTab){
      case 0 : return <Orders/>;
      case 1 : return <Statistics/>;
      case 2 : return <Settings/>;
      default: return null;
    }
  };

  render() {
    return (
        <div>
          <Header
              active={this.state.activeTab}
              switchTab={this.switchTab}
              tabs={this.state.tabs}/>
          <Menu/>
          {this.renderContent()}
        </div>
    );
  }
}

export default App;