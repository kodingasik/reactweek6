import React from "react";
import styled from "styled-components";
import Counter from "../Counter";

const imgProduct = "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

const CardContainer = styled.div`
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
   max-width: 300px;
   margin: auto;
   text-align: center;
   font-family: arial;
`;

const Image = styled.img`
   width: 100%;
`;

const Heading = styled.h1`
   font-size: 18px;
`;

const Price = styled.p`
   color: grey;
   font-size: 22px;
`;

const Description = styled.p`
   
   font-size: small;
`;

export default class Product extends React.Component{
   render(){
      return(
         <div>
            <CardContainer>
               <Image src={imgProduct} alt="img"/>
               <Heading>Title Card</Heading>
               <Price>Rp.12999</Price>
               <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, impedit consequuntur? Ratione quasi maiores quaerat facere dolore, non quae quisquam, itaque repellat aliquid odio harum nulla, deserunt ipsum possimus ducimus.</Description>
               <Counter />

            </CardContainer>
         </div>
      )
   }
}