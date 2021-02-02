import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import FormPersonalComponent from './Component/page/FormPersonalComponent';
import HomeContainer from './Container/HomeContainer';
import LoginContainer from './Container/LoginContainer';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' exact component={HomeContainer} />
          <Route path='/login' exact component={LoginContainer}/>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;