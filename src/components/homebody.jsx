import React from 'react';
import {Stack,AppBar, Toolbar,  createTheme, Box, Typography, Button, ThemeProvider} from '@mui/material';
import { Link } from 'react-router-dom';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import Navigation from './Navigation';
import Information from './imformation';
import Choice from './choice';
import BuildIcon from '@mui/icons-material/Build';
import OtherService from './otherService';
import Contact from './contact';
import ContactUs from './contactUs';
import Socials from './socials';
// import Mycarousel from './carousel'

const theme= createTheme({
    palette: {
        background:{
            paper: '#F9F9F9',
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
            width: '100%',
            height: 36,
            borderBottom: '1px solid black',
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

        <div className='bodyContainer'>
        <Typography component='h1' variant='h4' align='center' sx={{fontWeight:'bold', color:'text.light'}} gutterBottom>
        GET YOUR CAR RUNNING!
        </Typography>
        <Typography variant='h5' align='center' sx={{color:'text.contrastText'}}  paragraph>
            Stuck? Need remote repairs? Parts replacement? Diagnostics? <br />Our mechanics are up to task always and everywhere at your request. 
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

        </div>
        </Box>
        </div>
        </div>

        
        <div>  
        <Information /> 
        </div>
        

        <div className='MiscellaneousContainer'>
        <div className='rotatedContentContainer'>
        <Choice />

        </div>
        </div> 
        <div className='carouselContainer'>
        <div className='carouselContainerInfo'>

        <div className='mainServiceOfferedContainer'>
        <div className='servicesOfferedContainer'>
            <h4>SERVICES WE OFFER</h4>
        </div>
        </div>

        <div className='mainBuildIconContainer'>
        <div className='buildIconContainer'>
        <BuildIcon sx={{color:'background.dark', fontSize:'60px'}}/>
        </div>
        </div>
    
           
        <div className='mainCarouselContainerInfo'>
               
        <div className='carouselInformationContainer'>
        {/* <Mycarousel /> */}
        </div>


        </div>

     
     
        </div>

      
        </div>
        <div className='otherServiceContainer'>
        <div className='contactContainer'>
        <ContactUs />
        </div> 
        <OtherService />
        <Contact />
        </div>
        <Socials />

        </ThemeProvider>
 
    )
}

export default HomeBody;
export {theme};