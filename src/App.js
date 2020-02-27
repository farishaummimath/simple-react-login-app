import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {PrivateRoute} from './components/privateroute'
import {connect} from 'react-redux'


import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import AppLayout from './components/AppLayout'

function App(props) {
  return (
    <BrowserRouter>
      <div className ="App">
        <h3>React App- with user login and Dashboard</h3>
        <Switch>
          <Route path="/" component={LandingPage} exact={true}/>
          <Route path="/profile" component={AppLayout} exact={true}/>
          <PrivateRoute {...props} path="/dashboard" component={Dashboard}  exact={true} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)