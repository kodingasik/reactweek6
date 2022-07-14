import React from 'react';

class Compon extends React.Component{

   constructor() {
      super();
      this.state = { user: "fajri"};
   }

   render () {
      return <h1>{this.state.user}</h1>
   }
}

export default Compon;