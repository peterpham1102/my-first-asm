import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{

  state = {
    users:[
      {id: '1', username: "username1"},
      {id: '2', username: "username2"},
      {id: '3', username: "username3"},
    ],
    otherUser: 'other username'
  }

  switchUsernameHandler = (newUsername) => {
    this.setState()
  }
  

  
}

export default App;
