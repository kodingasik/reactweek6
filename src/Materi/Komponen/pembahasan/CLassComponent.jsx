import React from "react";

export default class CLassComponent extends React.Component{
      // Ini Basic belajar Bind dan menggunakan contructor

   // constructor(props) {
   //    super(props)

   //    this.state = {
   //       value : 0
   //    }

   //    this.handlePlus = this.handlePlus.bind(this);
   //    this.handleMinus = this.handleMinus.bind(this);

   // }

   // handlePlus() {
   //    this.setState({value: this.state.value + 1 });
   // }

   // handleMinus() {
   //    if(this.state.value > 0) {
   //       this.setState({value: this.state.value - 1 });
   //    }
   // }
   // Ini Basic belajar Bind dan menggunakan contructor


      // Menggunakan Arrow Function dan tanpa constructor agar otomatis bind
   state = {
      value : 0
   }

    handlePlus = () => {
      this.setState({value: this.state.value + 1 });
   }

   handleMinus = () => {
      if(this.state.value > 0) {
         this.setState({value: this.state.value - 1 });
      }
   }
   // Menggunakan Arrow Function dan tanpa constructor agar otomatis bind

   render() {
      return(
         <div>
            <h1>Komponen ini dibuat dengan kelas komponen</h1>
            <h2>Hello {this.props.nama}</h2>
            <button onClick={this.handleMinus}> - </button>
            <span>{' '}{this.state.value} {' '}</span>
            <button onClick={this.handlePlus}> + </button>
         </div>
      )
   }
}