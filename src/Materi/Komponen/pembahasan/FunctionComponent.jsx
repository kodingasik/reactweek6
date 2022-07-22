import React, { useState } from "react";
   // memanggil dengan props sebagai parameter
// const FunctionalComponent = (props) => {
   // memanggil dengan props sebagai parameter

      // membuat dengan object destructuring
   const FunctionalComponent = ({nama}) => {
      // membuat dengan object destructuring

      // Menggunakan state difunction dengan hook karna tidak terdaoat state pada functional component
      const [value, setValue] = useState(0)

      const handlePlus = () => {
         setValue(value+1);
      }

      const handleMinus = () => {
         if(value >0){
            setValue(value-1);
         }
      }

   return (
      <div>
       <h1>Membuat komponen dengan functional component</h1>
        {/* <h3>Hallo functional {props.nama}</h3>  */}
        {/* memanggil dengan props sebagai parameter */}
       <h3>Hallo functional {nama}</h3>
       <button onClick={handleMinus}>-</button>
       <span>{value}</span>
       <button onClick={handlePlus}>+</button>
      </div>
   )
}

// Membuat Props default apabila tidak mengirimkan nilai prop/parameter
FunctionalComponent.defaultProps = {
   nama: "Muhammad Fajri"
}
// Membuat Props default apabila tidak mengirimkan nilai prop/parameter

export default FunctionalComponent;