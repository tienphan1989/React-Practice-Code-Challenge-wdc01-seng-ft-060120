import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super();
    
        this.state = {
          amount: 0
        };
      }
    
      handleChange = e => {
        this.setState({[e.target.id]: parseInt(e.target.value) ? parseInt(e.target.value) : ''})
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleDeposit(this.state)
        this.setState({
            amount: 0
        })
      }
    
      render() {
        return (
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <label>
                Deposit Amount:
                <input id="amount" name="amount" type="text" onChange={this.handleChange} value={this.state.value}/>
              </label>
            </div>
            <div>
              <button type="submit">Click to submit</button>
            </div>
          </form>
        );
      }
}
