import React, { Component } from 'react'
import Transport from '@ledgerhq/hw-transport-u2f'
// import Transport from '@ledgerhq/hw-transport-http'
import Eth from '@ledgerhq/hw-app-eth'

let ethInstance

class App extends Component {
  state = { status: 'Not connected', addresses: [] }

  handleConnect = () => {
    ethInstance = new Eth(new Transport())
    this.setState({ status: 'Initialized' })
  }

  handleGetAddresses = async () => {
    const result = await ethInstance.getAddress("m/44'/60'/0'/0")
    console.log(result)
  }

  render() {
    const { status, addresses } = this.state

    return (
      <div style={{margin: '20px'}}>
        <button onClick={this.handleConnect}>Connect Ledger</button>
        <p style={{color: 'darkred'}}>{status}</p>
        <hr />
        <button onClick={this.handleGetAddresses}>Get Addresses</button>
        <ul>
          {addresses.map((addr, idx) => <li key={idx}>addr</li>)}
        </ul>
      </div>
    );
  }
}

export default App
