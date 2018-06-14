import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Settings from './components/Settings';
import Statistics from './components/Statistics';
import Orders from './components/Orders';
//import Table from './components/Table';

class App extends Component {
  state={
    tabs:['Orders', 'Statistics', 'Settings'],
    categories:['drink', 'dish', 'dessert', 'special'],
    activeTab:0,
    activeCat:0
  };

  switchTab = (i)=>{
    this.setState({activeTab:i})
  };

  switchCat = activeCat => this.setState({activeCat});


  render() {
      const content =[
        <Orders/>,
        <Statistics/>,
        <Settings/>
      ];

    return (
        <div>
          <Header
              active={this.state.activeTab}
              switchTab={this.switchTab}
              tabs={this.state.tabs}/>
          <Menu
              switchCat={this.switchCat}
              active={this.state.activeCat}
              categories={this.state.categories}/>
          {content[this.state.activeTab]}
        </div>
    );
  }
}

export default App;