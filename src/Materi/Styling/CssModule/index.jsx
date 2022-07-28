import React from "react";
import style from "./index.module.css";

export default class CssModule extends React.Component{

   render() {
      return (
         <div>
            <button className={`${style.btn} ${style.btnInfo}`}>Css Module Eduwork</button>
         </div>
      )
   }
}