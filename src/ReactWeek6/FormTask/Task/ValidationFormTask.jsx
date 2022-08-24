import React from "react";
import { ShowErrors } from "./ShowErrors";


// meemasukkan prop ({label, type, name}) menggunakan kurawal karna untuk desrrucuturing
const Input = ({label, type, name, onChange}) => {
   return(
      <div>
               <label htmlFor="">
         {label}: <input type={type} name={name} 
         // menangkap onChange yang sudah dimasukkan
         onChange={e => onChange(e.target.value)} />
      </label> <br />

      </div>      
   )
}





export default class ValidationFormTask extends React.Component{

   state = {
      username: '',
      password: '',
      errors: []
   }

   handleSubmit = event => {
      // memberikan prevent default agar tidak loading
      event.preventDefault();
      console.log(this.state);
      const {email, password} =this.state;

      let message = [];

      if(email.length === 0){
         message = [...message, 'Email tidak boleh kosong'];
        
      }
      if(password.length === 0){
         message = [...message, 'Password tidak boleh kosong'];
        
      }

      const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(String(email).toLowerCase())){
         message = [...message, "Email tidak valid"];
      }

      if (password.length < 7){
         message = [...message, "Password terlalu pendek"]
      }

      if (message.length >0){
         this.setState({
            errors: message
         });
      }else {
         alert(`
         email : ${this.state.email},
         password : ${this.state.password}
         `);
         this.setState({
            errors : []
         })
      }
   }

   render(){
      const style = {
         width:"400px",
         margin: "100px auto 0",
         border: "1px solid black",
         padding: "10px"
      }

     

      return(
         <div style={style}>

           {(
            this.state.errors && <ShowErrors errors={this.state.errors}/>
           )}
            <h4>Login Page</h4>
            <form onSubmit={this.handleSubmit} action="">
               <Input type="email" name="email" label="Email"
                  onChange={value => this.setState({email: value})} />
               <Input type="password" name="password" label="Password" 
                  onChange={value => this.setState({password: value})}/>
               <br />
               <button type="submit">Login</button>

            </form>
         </div>
      )
   }
}