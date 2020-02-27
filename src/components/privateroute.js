import React from 'react'
import { connect } from "react-redux";

import {Route,Redirect,withRouter} from 'react-router-dom'
const adminUser = {
    "username" :"hruday@gmail.com",
    "password" :'hruday123'
}
export const PrivateRoute = ({component: Component, user,...rest}) => {
    return (
        <>
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('loggedInUser') === adminUser.username
                ? console.log("Trying to render component") || (
                    <Component {...props} />
                    )
                : console.log("Redirected") || (
                    <Redirect
                        to={{ pathname: "/profile", state: { from: props.location } }}
              />
            )
      }
      />
      </>
        
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        user : state.user
    }
}
   
    
export default withRouter(connect(mapStateToProps)(PrivateRoute));
