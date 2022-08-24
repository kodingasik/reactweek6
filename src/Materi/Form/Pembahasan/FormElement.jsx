import React from "react";

export default class FormELement extends React.Component{
   state  = {
      nama: '',
      jurusan: '',
      alamat: '',
      gender: '',
      member: false
   }

   handleSubmit = (e) => {
      // agar tidak otomatis refresh
      e.preventDefault();
     // agar tidak otomatis refresh

      alert(`
      nama: ${this.state.nama}
      jurusan: ${this.state.jurusan}
      alamat: ${this.state.alamat}
      gender: ${this.state.gender}
      member: ${this.state.member ? 'YES' : 'NO'}
      `)
      // memberikan nilai setelah dimasukkan
      this.setState({
         nama: '',
      jurusan: '',
      alamat: '',
      gender: '',
      member: false
      })
            // memberikan nilai setelah dimasukkan

   }

   render(){
      return(
         // memberikan sedikit style pada form
         <div style={{margin: '100px auto', border: '1px solid grey', padding:'20px'}}>
         {/* memberikan sedikit style pada form */}
            <form action="" method="" onSubmit={this.handleSubmit}>
         <label>
            {/* Onchange untuk menghandle input */}
            Nama: <input type="text" name="nama" id="" 
            // ini untuk menghandle input tipe text
            onChange={e => this.setState({nama: e.target.value}) }
            // ini untuk menghandle input tipe text
                  //  Memberikan nilai default kelemeahanya tidak dapat diedit jika sudah dimasukkan nilai
            value={this.state.nama}
                  //  Memberikan nilai default
            />
         </label><br />

         <label htmlFor="">
            Jurusan: <select name="jurusan" id=""
                           // Menghandle input dan perubahan
                        onChange={e => this.setState({jurusan: e.target.value}) }
                           // Menghandle input dan perubahan
                        >
                        <option value="">Pilih Jurusan</option>
                        <option value="Teknik Informatika">Teknik Informatika</option>
                        <option value="Sistem Informasi">Sistem Informasi</option>
                        <option value="Design Komunikasi Visual">Design Komunikasi Visual</option>

            </select>
         </label><br />

         <label htmlFor="">
            Jenis Kelamin:
               <input type="radio" name="gender" id="" value="Laki-Laki"
               // Menghandle input dan perubahan 
                  onChange={e => this.setState({gender: e.target.value}) }
               // Menghandle input dan perubahan
                      
               />Laki-laki
               <input type="radio" name="gender" id="" value="Perempuan" 
               // Menghandle input dan perubahan

                  onChange={e => this.setState({gender: e.target.value}) } 
               // Menghandle input dan perubahan
               />Perempuan
         </label><br />

         <label htmlFor="">
                Alamat: < textarea name="alamat" id="" cols="30" rows="10"
                // Menghandle input dan perubahan

                  onChange={e => this.setState({alamat: e.target.value}) }
                // Menghandle input dan perubahan
                  //  Memberikan nilai default untuk mengtasai masalah yang sebelumnya
                  defaultValue={this.props.alamat}
                  //  Memberikan nilai default
                  />
         </label> <br />
         <label htmlFor="">
               Member:  
               <input type="checkbox" name="member" id=" " checked={this.state.member}   
               // Menghandle input dan perubahan
                   onChange={e => this.setState({member: e.target.checked}) } 
               // Menghandle input dan perubahan
               />
         </label> <br />
         <button type="submit">Submit</button>
      </form>
         </div>
      
      )
   }
}