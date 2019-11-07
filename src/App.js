import React, { Component } from 'react';
import './App.css';
import Alert from './component/alert'

class App extends Component {

  state={
    showAlert: false
  }

  handleClick = () =>{
    this.setState({ showAlert: !this.state.showAlert})
  }

  render() {

    const { showAlert } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleClick}> Clique aqui </button>

          <Alert message='Test alert' isWarning onClose={this.handleClick} isOpen={showAlert}/> 
        </header>
      </div>
    );
  }
}

export default App;
