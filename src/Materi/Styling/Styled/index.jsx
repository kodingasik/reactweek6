import React from "react";
import styled from "styled-components";

const Button = styled.button`
   border: 2px solid black;
   background-color: white;
   color: dodgerblue;
   padding: 14px 2px;
   font-size: 16px;
   cursor: pointer;

   &:hover {
      background: #2196f3;
      color: white;
   }
`;

export default class Styled extends React.Component{
   render(){
      return(
         <div>
            <Button>Button Styled Library</Button>
         </div>
      )
   }
}