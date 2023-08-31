
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
       <h1>loremipsum</h1>
       {x.succ && x.succ.map(element=>{
        return (<div>{element}</div>)
       })}
    </div>
  )
}

export default App
