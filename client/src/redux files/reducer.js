import * as constants from './constants'

const initialState={
    user:null,
    register:null
}

const reducer =(state=initialState,action)=>{

    switch(action.type){
        case constants.USER: return{
            ...state,user:action.payload
        }
        case constants.REGISTER: return{
            ...state,whom:action.payload
        }
        default :return state
        
    }
}

export default reducer