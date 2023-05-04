import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';



function Login({users , setIslogged}) {
    // console.log(users);

    function handleRegister() {
        setIslogged(true);
    }

    let [user, setUser] = useState({})
    const handleChange = function(e) {
        setUser({ ...user , [e.target.name] : e.target.value})
        // console.log("salam");
    }
    const handleClick = function(e) {
        // <Toaster/>
        e.preventDefault()
        // console.log(user);
        let userFound = users.find((item) =>item.email == user.email && item.password == user.password );
        // console.log(user.email);
        // console.log(user.password);
        // console.log(userFound);

        if (userFound != undefined) {
            userFound = true;
            // <Toaster/>
           
        }else {
            userFound = false;
            // console.log("salam");
           
        }

        setIslogged(userFound)
        
    }
  return (
    <>
    <h1>Login</h1>
    <form style={{display:"flex"}} onClick={(e)=> handleClick(e)}>
    <TextField style={{width : "600px", marginRight : "30px"}} name='email' onChange={(e)=>handleChange(e)} id="outlined-basic" label="email" variant="outlined" />
    <TextField style={{width : "600px",}} id="outlined-basic" type='password' name='password'  onChange={(e)=>handleChange(e)} label="password" variant="outlined" />
    <Button size='large' variant="contained" disableElevation style={{marginLeft : "30px"}}>SIGN IN</Button>
    </form>


    <Button  onClick={(e)=> handleRegister(e)} size='large' variant="contained" disableElevation style={{marginLeft : "550px", marginTop : "50px"}}>Register</Button>
    

    </>
  )
}

export default Login