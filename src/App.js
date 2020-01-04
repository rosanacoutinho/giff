
import './App.css';
import React, { Component } from 'react';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }

  state = {
    contacts: []
  }

  componentDidMount() {


    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
}

export default App;
