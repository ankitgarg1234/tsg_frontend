import React,{useState,useEffect} from 'react'
import LandingPage from "./components/LandingPage"
import classes from "./css/LandingPage.module.css"
import DataLoader from "../../components/DataLoader/DataLoader"
export default function TsgEvents() {
    const[data,setdata]=useState(null)
    const[resultdata,setresultdata]=useState(null)
    useEffect(() => {
        fetch("http://tsg-iitkgp.herokuapp.com/tsgevents/")
          .then((res) => {
            if (!res.ok) {
              throw Error(res.status);
            }
            return res.json();
          })
          .then((data) => {
            
             setdata(data.event_list);
            
            
          })
          .catch((e) => {
            console.log(e);
          });

          fetch("http://tsg-iitkgp.herokuapp.com/tsgeventresults/")
          .then((res) => {
            if (!res.ok) {
              throw Error(res.status);
            }
            return res.json();
          })
          .then((data) => {
            
             setresultdata(data.event_list);
            
            
          })
          .catch((e) => {
            console.log(e);
          });

      },[]);
    return (
        <div>
        {(!data && !resultdata) && <DataLoader/>}
        {(data && resultdata) && <LandingPage data={data} resultdata={resultdata}/>}
        </div>
    )
}
