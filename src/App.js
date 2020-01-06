
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

    //http://jsonplaceholder.typicode.com/users

     //http://signos-bucket.s3.us-east-2.amazonaws.com/contactlist.json

     //https://signos-bucket.s3.us-east-2.amazonaws.com/aries.txt
      //,{ mode: 'no-cors'}
      


    fetch('https://signos-bucket.s3.us-east-2.amazonaws.com/contactlist.json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  
}

export default App;
