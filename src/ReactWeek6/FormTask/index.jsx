import React from "react";
import ValidationFormTask from "./Task/ValidationFormTask";


export default class FormTask extends React.Component{
   render(){
      return(
         <div>
            <h1>Week 6 Validation Form</h1>

            <h2 style={{color:"blue"}}>Validation</h2>
            <ValidationFormTask />
         
         </div>
      )
   }
}