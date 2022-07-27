import React from "react";
import CLassComponent from "./pembahasan/CLassComponent";
import FunctionalComponent from "./pembahasan/FunctionComponent";

export default class Komponen extends React.Component{

   render(){
      return(
         <div>
            <CLassComponent nama="Muhammad Fajri Assidiq"/>
            {/* Memberikan nilai props */}
            <FunctionalComponent nama="Muhafash"/>
            {/* Memberikan nilai props */}

            {/* Tidak mengirim/memberi nilai props */}
            <FunctionalComponent />
            {/* Tidak mengirim/memberi nilai props */}

         </div>
      )
   }
}


// Kesimpulan props merupakan propert pada objek atau sebuah parameter