import logo from './logo.svg';
import './App.css';
import React from 'react';

class Hello extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'unknown'
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_HELLO_API}Isabelle`)
      .then(r => r.json())
      .then(
        (result) => {
          this.setState({name: result.name});
        }
      );
  }

  render() {
    return (
      <p>
        Hello {this.state.name}, welcome to Echelon!
      </p>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello name="frank" />
      </header>
    </div>
  );
}

export default App;
