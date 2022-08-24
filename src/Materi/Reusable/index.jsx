import React from "react";
import Bar from "./Bar";
import Product from "./Product";



export default class Reusable extends React.Component{
   render(){
      return(
         <div>
            <Bar qty="22"/>
            <Product />
         </div>
      )
   }
}