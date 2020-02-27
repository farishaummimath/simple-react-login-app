const adminUser ={
    "username" :"hruday@gmail.com",
    "password" :'hruday123'
}
export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: 'REMOVE_USER'
    }
}



export const startSetUser = (loginData,props) => {
    return (dispatch) => {
        if(loginData.email !== '' && loginData.password !== ''){
            localStorage.setItem('loggedInUser',loginData.email)
            dispatch(setUser(loginData))
            if(loginData.email===adminUser.username && loginData.password === adminUser.password){
                props.history.push('/dashboard')
            } else {
                props.history.push('/profile')
            }
            
        } else {
            props.history.push('/')
        }
            
    }
}

export const startRemoveUser = () => {
    return(dispatch=>{
       
        localStorage.removeItem('loggedInUser')
        dispatch(removeUser())
      
            

    })
}