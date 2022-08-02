import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../store/auth-context';
import Addform from './Addform';
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
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import MainAppBar from './mainappBar';
import { Audio } from 'react-loader-spinner';
import HeaderCartButton from './LibraryCartIcon';




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

const theme = createTheme();

const Library = () => {
  const [cdata, setData] = useState([]);
  const [loading, setIsloading] = useState(true);
  const[httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://carpartdata-default-rtdb.firebaseio.com/cardata.json');
      if(!response.ok){
        throw new Error('Something went wrong');
      }
      const data = await response.json()
      console.log(data);
      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,

        })
      }
      setData(loadedData);
      setIsloading(false);
    };
      fetchData().catch((error)=>{
        setIsloading(false);
        setHttpError(error.message);
      });
      
    
  }, []);




  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  console.log(isLoggedIn);
  const logoutHandler = () => {
    authCtx.logout();
    window.location.href = '/';
  }


  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <div className='header'>
          <MainAppBar
            id2='/library/service' header2={<button className='headerp'>NEED A SERVICE</button>}
            id3='' header3={<HeaderCartButton />}
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

            <Container maxWidth="lg" sx={{ mt: '3rem' }}>

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
              {httpError &&(
                <div className='loadingStatus'>
                <p>{httpError}</p>
                </div>
              )}
              {loading && (
                <div className='loadingStatus'>
                  <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color='blue'
                    ariaLabel='three-dots-loading'
                    wrapperStyle
                    wrapperClass
                  /></div>
              )}
              {!loading && (<>
                {cdata.map((e) => (
                  <Grid item key={e} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: '100%', display: 'flex', flexDirection: 'column',
                        alignItems: 'center',
                        "&:hover": {
                          boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                          transform: 'translate3d(0, -1px, 0) scale(1.02)',
                          border: '1px solid #0039a6',

                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          // 16:9
                          pt: '10%',
                        }}
                        image="https://4wdprofishop.cz/resources/products/1/123872_2.jpg?size=large"
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2" sx={{ textAlign: 'center', fontWeight: 'bold', opacity: '.9' }}>
                          {e.name}
                        </Typography>
                        <Typography sx={{ textAlign: 'center' }}>
                          {e.description}
                        </Typography>
                        <Typography sx={{ pt: '5px', opacity: '.7', textAlign: 'center' }}>
                          Ksh {e.price}
                        </Typography>
                      </CardContent>
                      <CardActions>
                      <Addform />
                      </CardActions>
                    </Card>
                  </Grid>

                ))}
              </>
              )}

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