import React from "react";
import ValidationForm from "./Pembahasan/ValidationForm";

export default class Form extends React.Component{
   render(){
      return(
         <div>
            <h1>Week 6 Validation Form</h1>

            <h2 style={{color:"blue"}}>Validation</h2>
            <ValidationForm/>
         </div>
      )
   }
}