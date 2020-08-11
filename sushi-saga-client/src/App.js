import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from "./components/Form"

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       freshSushi: [],
       eatenSushi: [],
       balance: 400,
       page: 1
    }
  }

  componentDidMount() {
    fetch(`${API}?_page=${1}&_limit=4`)
    .then(resp => resp.json())
    .then(newSushi => 
      this.setState({
        freshSushi: newSushi
    }))
  }

  requestMoreSushi = () => {
    fetch(`${API}?_page=${this.state.page + 1}&_limit=4`)
    .then(resp => resp.json())
    .then(newSushi => 
      this.setState({
        freshSushi: newSushi,
        page: this.state.page + 1
      }))
  }

  consumeSushi = (id, price) => {
    if(this.state.balance < price){
      return window.alert("You don't have enough money left!");
    }
    const consumedSushi = this.state.freshSushi.find(sushi => sushi.id === id);
    const stillFreshSushi = this.state.freshSushi.filter(sushi => sushi.id !== id);
    this.setState({
      freshSushi: stillFreshSushi,
      eatenSushi: [...this.state.eatenSushi, consumedSushi],
      balance: this.state.balance - price
    })
  }

  //returns object from submit form
  handleDeposit = (amount) => {
    let add = JSON.stringify(amount);
    let addAmount = parseInt(add, 10);
    console.log(addAmount, typeof addAmount)
    this.setState({
      balance: this.state.balance + addAmount
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        freshSushi={this.state.freshSushi} 
        eatenSushi={this.state.eatenSushi}
        requestMoreSushi={this.requestMoreSushi} 
        consumeSushi={this.consumeSushi} 
        balance={this.state.balance}
        />

        <Table 
        balance={this.state.balance}
        eatenSushi={this.state.eatenSushi}
        />
        <Form
        handleDeposit={this.handleDeposit}/>
      </div>
    );
  }
}

export default App;