import React, {useState} from "react";
import httpClient from "./httpClient";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const RegisterPage = ()=>{
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const registerUser = async () =>{
        try{
             await httpClient.post("//localhost:5000/register", {
                "email": email,
                "password":password,
            })
            window.location.href = "/library";
        } catch( error ){
            if(error.response.status === 401){
                alert("Invalid credentials");
             
        }
    }
}
  const passwordVerification = ()=>{
    if(password === confirmPassword){
      registerUser()
    }
    else{
      alert("passwords do not match");
    }
  };

return (
  <>
           <Container component="main" maxWidth="xs">
           <CssBaseline />
           <Box
           sx={{
             marginTop:8,
             display:'flex',
             flexDirection:'column',
             alignItems:'center'
           }}
           >
           <Avatar sx={{m:1, bgcolor:'secondary.main'}}>
           <LockOutlinedIcon />
           </Avatar>
           <Typography component='h1' variant='h5'>
            SignUp
           </Typography>
           <Box component='form' noValidate sx={{mt:1}}>
           <TextField
           margin="normal"
           required
           fullWidth
           onChange={(e) => setEmail(e.target.value)}
           id="email"
           label="Email Address"
           name="email"
           autoComplete="email"
           autoFocus />
           <TextField 
            margin="normal"
              required
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            
           />
           <TextField
           margin="normal"
           required
           fullWidth
           onChange={(e)=> setConfirmPassword(e.target.value)}
           name="confirmPassword"
           label="confirm password"
           type="password" />
           <FormControlLabel 
           control={<Checkbox value="remember" color="primary"/>} 
            label='Remember me'
           />
           <Button 
           onClick={()=>passwordVerification()}
           type="submit"
           fullWidth
           variant="contained"
           sx={{mt:3, mb:2}}
           >
            SignIn
           </Button>
           <Grid container>
             <Grid item>
                <Link href="/login" variant="body2">
                    {"Already have an account? Sign In"}
                </Link>
             </Grid>
           </Grid>
           </Box>
           </Box>
           </Container>       
    </>
  );
};
export default RegisterPage;