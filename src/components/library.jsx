import * as React from 'react';
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

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
// import httpClient from "./httpClient";

const Library = ()=>{
//     const[user, setUser] = useState('');
    
//     const logoutUser = async ()=>{
//         await httpClient.post("https://carmateserver.herokuapp.com/logout");
//         window.location.href = "/";
//     };

//     useEffect(()=>{
//         (async ()=>{
//             try{
//                 const resp = await httpClient.get("https://carmateserver.herokuapp.com/@me")
//                 setUser(resp.data)
//             } catch(error){
//                 console.log("Not authenticated");
//             }
//         })();
//     }, []);

    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{display:'flex', justifyContent:'space-between', alignContent:'center'}}>
          
          <Typography variant="h6" color="inherit" noWrap>
          <CarRepairIcon sx={{ mr: 1 }} />
            CarMate
          </Typography>
          <ShoppingCartOutlinedIcon />
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
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Lorem Ipsum
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
             nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
             officia deserunt mollit anim id est laborum."
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">LogoutUser// temporary</Button>
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
                      pt: '56.25%',
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
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
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
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>

      {/* End footer */}
        {/* this is the authentication code */}
          {/* <h1>CarMATE</h1>
          {user != null ? (
            <div>
              <h2>Logged in</h2>
              <h3>ID: {user.id}</h3>
              <h3>Email: {user.email}</h3>
    
              <button onClick={logoutUser}>Logout</button>
            </div>
          ) : (
            <div>
              <p>You are not logged in</p>
              <div>
                <a href="/login">
                  <button>Login</button>
                </a>
                <a href="/register">
                  <button>Register</button>
                </a>
              </div>
            </div>
          )} */}






        </ThemeProvider>
      );
    };

export default Library;