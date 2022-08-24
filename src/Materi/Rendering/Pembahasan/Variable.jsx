import React from "react";

export default class Variable extends React.Component{
   state = {
      // Variavble yang tidak dirender
      a: null,
      b: true,
      c: "",
            // Variavble yang tidak dirender
      d: 2
   }
   render() {
      return(
         <div>
            <div>a: {this.state.a}</div>
            <div>b: {this.state.b}</div>
            <div>c: {this.state.c}</div>
            <div>d: {this.state.d}</div>
            <div>e: {this.state.d}</div>

         </div>
      )
   }
}