
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
       <h4>{'Below Contains A title and Body gotten froma random API, Please take your time to Review' }</h4>
       <ul>
        {x.succ ? x.succ.map(element=>{
        return (<li><div className="title">Title :{element.title}</div><div className="body">Body :{element.body}</div></li>)
       }) : <li>'Below Contains A title and Body gotten froma random API, Please take your time to Review' </li>}
       </ul>
    </div>
  )
}

export default App
