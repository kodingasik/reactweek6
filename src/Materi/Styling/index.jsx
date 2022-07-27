import React from "react";
import Plain from "./Plain";
import Sass from "./Sass";

export default class Styling extends React.Component {

   render() {
      return (
         <div>
            <Plain />
            <Sass />
         </div>
      )
   }
}