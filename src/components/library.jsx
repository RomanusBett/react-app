import React, {useContext} from 'react';
import AuthContext from '../store/auth-context';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import MainAppBar from './mainappBar';





function Copyright() {



  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        CarMATE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3];

const theme = createTheme();

const Library = ()=>{
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  console.log(isLoggedIn);
  const logoutHandler = ()=>{
    authCtx.logout();
    window.location.href='/';
  }


    return (
      <ThemeProvider theme={theme}>
        <div>
        <CssBaseline />
        <div className='header'>
        <MainAppBar 
        id3='/library/service' header3='NEED A SERVICE'
        id1='' header1={<AccountCircleIcon sx={{ml:'10px'}} />}
        id2='' header2={<ShoppingCartOutlinedIcon />}
        header4={
        <button 
          onClick={logoutHandler}
          className='logoutButton'>
          LOGOUT
           </button>}
        />        
        </div>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
        <Container
         maxWidth='lg'>
        </Container>

          <Container maxWidth="lg" sx={{mt:'3rem'}}>

            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
           
            BUY PARTS
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            The following parts are available for purchase.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >

             <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
       

            </Stack>

          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column',  "&:hover": {
                        boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                        transform: 'translate3d(0, -1px, 0) scale(1.02)',
                        border:'1px solid #0039a6',
                       }, }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10%',
                    }}
                    image="https://burggermany.de/wp-content/uploads/2019/07/strut-complete.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Front coil spring
                    </Typography>
                    <Typography>
                      Coil Springs for NIssan MarcH. part Number VV09-OI99 <br/>
                      Ksh56,000
                      {/* car type data */}


                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small">ADD TO CART</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          CarMATE
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        > 
        CarMATE
        </Typography>
        <Copyright />
      </Box>
        </div>
      
 
      




        </ThemeProvider>
      );
    };

export default Library;