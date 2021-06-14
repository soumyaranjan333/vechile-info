import React, { Component } from 'react'
import './App.css';
import Addview from './components/Addview'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Add from './components/Add'
import Vechile from './components/Vechile';
import View from './components/View'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='App container'>
        <h2 className='text-primary text-decoration-underline'>Vehicle Information</h2>
        {/* <Addview /> */}
          <Route exact Path='/' component ={Addview} />
        <Switch>
          <Route path = '/add' component={Add} />
          <Route path = '/view' component={View} />
          <Route path = '/:id' component ={Vechile} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App

