import React from 'react'
import LoginPage from './LoginPage'
import {Link} from 'react-router-dom'


function LandingPage(props){
    return (
        <>   
            {!localStorage.getItem('loggedInUser') ?(
                <LoginPage {...props}/>
            ) :(
                <>
                <Link to ='/' onClick = {()=>{
                    localStorage.removeItem('loggedInUser')
                    props.history.push("/")
                    }}>Logout</Link>
                    <h3>Landing Page</h3>
                    <p>Welcome to React App</p>
                </>
                
            )
            }
         </>
    )
}
export default LandingPage