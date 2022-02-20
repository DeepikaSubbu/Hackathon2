import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Grid} from '@mui/material'
import axios from 'axios';


function LoginComponent () {

  const[email, setEmail] =React.useState('')
  const[password, setPassword] =React.useState('')
  const navigate = useNavigate();

   
  

      const handleSubmit = async (e) =>{
        e.preventdefault();
        try{
          var response = await axios.post('http://localhost:3001/register/signin', {
            
          email: email,
          password: password
         
         
        });
         console.log(response);

         if(response.data){
           await localStorage.setItem("token", response.data)
           navigate('/product');
         }
      }
        catch(err){
          console.log(err)
        }
      }

        return(
            <>
            <Grid style={{margin:'5%'}}>
            <Typography variant="h3" component="div" gutterBottom>Pizza🍕</Typography>
         
             <TextField id="email" type="email" label="Email" variant='outlined' value={email} onChange={(e) => setEmail(e.target.value)}></TextField><br/><br/>
             <TextField id="password" type="password" label="Password" variant='outlined' value={password} onChange={e => setPassword(e.target.value)}></TextField><br/><br/>
             <Button type="submit" variant="contained" > Admin Login</Button>&nbsp;&nbsp;&nbsp;&nbsp;
             <Button onClick={handleSubmit} type="submit" variant="contained">Customer Login</Button> &nbsp;&nbsp;&nbsp;&nbsp;
             <Button onClick={()=>navigate("/product")} type="submit" variant="contained">Register</Button>
          
           </Grid>
               
            </>
        )
        }
      
    


export default LoginComponent;