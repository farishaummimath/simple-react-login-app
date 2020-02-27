    
const employeesReducer = (state=[],action) => {
    switch(action.type){
        
        case 'SET_EMPLOYEES': return  [].concat(state,action.payload)
       
        default: return [...state]
    }
}

export default employeesReducer