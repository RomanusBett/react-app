import React from 'react';
import {Stack,AppBar, Toolbar,  createTheme, Box, Typography, Container, Button, ThemeProvider} from '@mui/material';
import Service from './serviceslist';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { Link } from 'react-router-dom';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Navigation from './Navigation';


const theme= createTheme({
    palette: {
        background:{
            paper: 'fff',
            light: '#ffac33',
            main: '#007bb2',
            dark: '#03002E',
            contrastText: '#cfd8dc',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
            light: '#ffac33',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#fff',
        }        
    },
    typography:{
        fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'
    },
});

const HomeBody = ()=>{
    return(
        <ThemeProvider theme = {theme}>
        <div className='main_container'>
        <div className='mainContainerFilter'>

        <Box 
        sx={{
            fontFamily:'theme.typography.fontFamily.Arial',
            pt:0,
            minWidth: '100%',
            height: '100vh',

        }}>
      <AppBar position='absolute'>
        <Toolbar sx={{
            bgcolor:'background.dark',
            position: 'fixed',
            width: '100%'
        }}>
        <div className='big-container'>
        <div className='logoContainer'>
        <Typography variant='h6' sx={{
            display:'flex',
            color:'background.light'

        }}>
        <CarRepairIcon fontSize='medium' sx={{
            mt:0.5,
            mr:0.5,
            color:'background.light'
             }}/>
        CarMATE
        </Typography>
        </div>
        <div>


       <Navigation />
      
        </div>
        </div>
        </Toolbar>


        </AppBar>

        <Container maxWidth='md' sx={{ width: 1, height: 1, pt:20 }}>
        <Typography component='h1' variant='h3' align='center' sx={{fontWeight:'bold', color:'text.light'}} gutterBottom>
        CarMATE
        </Typography>
        <Typography variant='h5' align='center' sx={{color:'text.contrastText'}}  paragraph>
        stuck? Need remote repairs? Parts replacement? Diagnostics? Our mechanics are up to task always and everywhere at your request. 
        </Typography>
        <Stack sx={{pt:12}}
        direction='row'
        spacing={2}
        justifyContent='center'>
        <Link to='/login' style={{textDecoration:'none'}}>
        <Button size='large' variant='contained' sx={{color:'text.primary', bgcolor:'background.light'}}>SignIn</Button>
        </Link>
        <Link to='/register' style={{textDecoration:'none'}}>
        <Button size='large' variant='outlined' sx={{color:'text.light'}}>SignUp</Button>
        </Link>

        </Stack>

        </Container>
        </Box>
        </div>

        <Box sx={{
            bgcolor:'background.contrastText',
            pt:5,
            pb:3
        }}>
        <Container align='center' sx={{
            
        }}>
        <Typography variant='h5' sx={{mb: 2, fontWeight:'bold', pt:2}}>
        <MiscellaneousServicesIcon fontSize='medium' color='string'/>
        Services we offer
        </Typography>
        <Box sx={{pt:5}}>
        <Typography>
         <Service />
        </Typography>
        </Box>
        </Container>
        
        </Box>
        </div>
        <div className='contactContainer'>
        <Typography variant='body2' sx={{color:"background.light",}}> 
        <LocalPhoneIcon />
        +254XXX XXX XXX
        </Typography>
        </div>
        </ThemeProvider>
 
    )
}

export default HomeBody;
export {theme};