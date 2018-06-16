import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Settings from './components/Settings';
import Statistics from './components/Statistics';
import Orders from './components/Orders';
//import Table from './components/Table';
import axios from 'axios';

class App extends Component {
  state={
    tabs:['Orders', 'Statistics', 'Settings'],
    categories:['drink', 'dish', 'dessert', 'special'],
    activeTab:0,
    activeCat:0,
    menu:{},
    tables:['Table 1', 'Table 2', 'Table 3', 'Table 4'],
    activeTable:0,
    orders:[]
  };

  addOrder=(order)=>{
    const orders =
        [...this.state.orders, {...order,table:this.state.activeTable}]
    this.setState({orders})
  };

  switchTab = (i)=>{
    this.setState({activeTab:i})
  };

  switchCat = activeCat => this.setState({activeCat});

  switchTable = (i)=>{
    this.setState({activeTable:i})
  };

  componentDidMount(){
    const url ='https://enigmatic-cliffs-25405.herokuapp.com/menu';
    axios.get(url).then((res)=>{
      console.log(res);
      this.setState({menu:res.data.menu})
    })
  }

  render() {
      const content =[
        <Orders
            switchTable={this.switchTable}
            activeTable={this.state.activeTable}
            tables={this.state.tables}/>,
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
              addOrder={this.addOrder}
              menu={this.state.menu[this.state.categories[this.state.activeCat]]}
              switchCat={this.switchCat}
              active={this.state.activeCat}
              categories={this.state.categories}/>
          {content[this.state.activeTab]}
        </div>
    );
  }
}

export default App;