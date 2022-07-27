import React, {useContext} from 'react';
import AuthContext from '../store/auth-context';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import QuickFix from './quickfix';





function Copyright() {



  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://carmateapp.herokuapp.com/">
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
      <AppBar position="relative">
        <Toolbar sx={{display:'flex', justifyContent:'space-between', alignContent:'center'}}>
          
          <Typography variant="h6" color="inherit" noWrap>
          <CarRepairIcon sx={{ mr: 1 }} />
            CarMate
          </Typography>
          <Box>
          <button 
          onClick={logoutHandler}
          className='logoutButton'>
          logout
           </button>
          <ShoppingCartOutlinedIcon />
          <AccountCircleIcon sx={{ml:'10px'}} />
          </Box>
        </Toolbar>
      </AppBar>
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
         <QuickFix />
        </Container>

          <Container maxWidth="lg">
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
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
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
      {/* Footer */}
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