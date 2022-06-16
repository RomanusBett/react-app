import React, {useState} from "react";
import httpClient from "./httpClient";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginPage = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async () =>{
        console.log(email, password);

        try{
            await httpClient.post("//localhost:5000/login",{
                "email": email,
                "password": password,
            });
            window.location.href = "/library";
        } catch(error){
            if(error.response.status === 401){
                alert("invalid credentials");
            }}};

    return(
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
            SignIn
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
           <FormControlLabel 
           control={<Checkbox value="remember" color="primary"/>} 
            label='Remember me'
           />
           <Button 
           onClick={()=>loginUser()}
           type="submit"
           fullWidth
           variant="contained"
           sx={{mt:3, mb:2}}
           >
            SignIn
           </Button>
           <Grid container>
             <Grid item xs>
               <Link href="#" variant='body2'>
                Forgot Password?
               </Link>
             </Grid>
             <Grid item>
                <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
             </Grid>
           </Grid>
           </Box>
           </Box>
           </Container>
           </>
       
    );
};
export default LoginPage;
