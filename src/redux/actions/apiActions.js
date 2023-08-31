import { GET_ERROR,GET_SUCC,GET_LOADING } from "./actionTypes";
import axios from 'axios'

export const getloading= ()=>{
    return {
        type:GET_LOADING
    }

}
export const getsucc= (data)=>{
    return {
        type:GET_SUCC,
        payload:data
    }

}
export const geterror= (error)=>{
    return {
        type:GET_ERROR,
        payload:error
    }

}
export const getData = ()=>{

    return (dispatch)=>{
        dispatch(getloading())
        axios.get('https://baconipsum.com/api/?type=meat-and-filler').then(data=>dispatch(getsucc(data.data))).catch(error=>dispatch(geterror(error.message)))
    }
}