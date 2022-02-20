import React from 'react';

import { Typography, TextField, Button, Grid} from '@mui/material'
import axios from 'axios';

function ProductComponent(){

    const[username, setusername] =React.useState('')
    const[name, setname] =React.useState('')
    const[address, setaddress] =React.useState('')
    const[email, setEmail] =React.useState('')
    const[password, setPassword] =React.useState('')


    const handlesSubmit = async (e) =>{
        e.preventdefault();
        try{
          var response = await axios.post('http://localhost:3001/register/signup', {
           
          username:username,
          name:name,
          address:address,
          email: email,
          password: password
         
         
        });
         console.log(response);
    }
    
    catch(err){
        console.log(err)
      }
    }
  
  

return(
    <>
    <h3>Register/SignUp</h3>

    <TextField id="username" type="text" label="username" variant='outlined' value={username} onChange={(e) => setusername(e.target.value)}></TextField><br/><br/>
    <TextField id="name" type="text" label="name" variant='outlined' value={name} onChange={(e) => setname(e.target.value)}></TextField><br/><br/>
    <TextField id="address" type="text" label="address" variant='outlined' value={address} onChange={(e) => setaddress(e.target.value)}></TextField><br/><br/>
    <TextField id="email" type="email" label="Email" variant='outlined' value={email} onChange={(e) => setEmail(e.target.value)}></TextField><br/><br/>
             <TextField id="password" type="password" label="Password" variant='outlined' value={password} onChange={e => setPassword(e.target.value)}></TextField><br/><br/>
             <Button onClick={handlesSubmit}type="submit" variant="contained" >submit</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            
    </>
)
}
export default ProductComponent;




