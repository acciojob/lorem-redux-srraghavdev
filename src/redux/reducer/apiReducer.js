import { GET_LOADING,GET_ERROR,GET_SUCC } from "../actions/actionTypes";


let initialstate={
    loading:false,
    succ:'',
    error:''
}
export const apiReducer = (state=initialstate,action)=>{
        switch(action.type){
            case GET_LOADING :  return {...state,loading:true}
            case GET_SUCC: return {...state,succ:action.payload,loading:false}
            case GET_ERROR: return {... state,error:action.payload,loading:false}
            default : return state
        }

}