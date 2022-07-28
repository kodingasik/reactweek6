import React from "react";
import Inline from "./Inline";
import CssModule from "./CssModule";
import Plain from "./Plain";
import Sass from "./Sass";
import Title from "./Sass/Title";
import Styled from "./Styled";
import Bootstrap from "./Bootstrap";

export default class Styling extends React.Component {

   render() {
      return (
         <div>
            <Bootstrap />
            <Title />
            <h3 className="title">Belajar Mern</h3>
            <Inline />
            <Plain />
            <Sass />
            <CssModule />
            <Styled />
            
         </div>
      )
   }
}