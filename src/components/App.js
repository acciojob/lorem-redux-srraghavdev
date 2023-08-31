
import React from "react";
import './../styles/App.css';
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react";
import { getData } from "../redux/actions/apiActions";

const App = () => {
  let dispatch=useDispatch()
  let x= useSelector((data)=>data)
  console.log(x)
  useEffect(()=>{
    dispatch(getData())
  },[])
  return (
    <div>
       <h1>A short Naration of Lorem Ipsum</h1>
       <h4>{x.loading ? 'Loading' : 'Lorem Posts' }</h4>
       <ul>
        {x.succ && x.succ.map(element=>{
        return (<li>{element}</li>)
       })}
       </ul>
    </div>
  )
}

export default App
