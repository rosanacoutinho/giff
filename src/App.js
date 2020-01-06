
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
    
 
    fetch('https://signos-bucket.s3.us-east-2.amazonaws.com/contactlist.json',
    {   method:'GET',
        mode: 'cors',
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
}

export default App;
