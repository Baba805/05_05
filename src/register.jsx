import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Register({users , setIslogged}) {

  let [registerUser , setRegisterUser] = useState({})

  const handleRegisterChange = function(e) {
    setRegisterUser({...registerUser, [e.target.name] : e.target.value})
    console.log(registerUser);
  }
  const RegisterhandleClick = function(e){
    e.preventDefault();
    if (registerUser.email!== "" && registerUser.password!== "" && registerUser.fullname!== "") {
      console.log("salam");
      let addUser = users.push(registerUser);
    }
    console.log(users);
  }

 
  
  return (
   <>
   <form style={{display:"flex", flexDirection : "column" , justifyContent : "space-around"}} onClick={(e)=> RegisterhandleClick(e)}>
    <TextField style={{width : "600px", marginRight : "30px", marginBottom : "10px"}} onChange={(e)=>handleRegisterChange(e)} name='email' id="outlined-basic" label="email" variant="outlined" />
    <TextField style={{width : "600px",  marginBottom : "10px" }} id="outlined-basic"  onChange={(e)=>handleRegisterChange(e)} type='password' name='password'label="password" variant="outlined" />
    <TextField style={{width : "600px",  marginBottom : "10px" }} id="outlined-basic"  onChange={(e)=>handleRegisterChange(e)}  type='text' name='fullname'label="fullname" variant="outlined" />

    <Button size='large' variant="contained" disableElevation style={{marginTop : "30px"}}>Log in</Button>
    </form>
   </>
  )
}

export default Register